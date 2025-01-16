import { createClient } from '@/utils/supabase/server';
import { generateResponse } from '@/utils/openai';
// import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('user_id');

  // Supabase 클라이언트 생성
  const supabase = createClient();

  // user_id의 데이터를 created_at 오름차순으로 조회
  const { data: chatbotData } = await supabase
    .from('chatbot_ai')
    .select('chat_id, answer, question, status')
    .eq('user_id', userId)
    .order('created_at', { ascending: true });

  let answers: string[] = [];
  let questions: string[] = [];
  let chat: string[] = [];
  let typingStatus: boolean[] = [];
  let chatId: number[] = [];
  // 데이터가 존재할 경우 처리
  if (chatbotData && chatbotData.length > 0) {
    chatbotData.forEach((row) => {
      chatId.push(row.chat_id);
      typingStatus.push(row.status, row.status);
      if (row.question) {
        questions.push(row.question.trim());
        chat.push(row.question.trim());
      }
      if (row.answer) {
        answers.push(row.answer.trim());
        chat.push(row.answer.trim());
      }
    });
  }
  return NextResponse.json({
    questions,
    answers,
    chat,
    typingStatus,
    chatId,
  });
}

export async function POST(req: NextRequest) {
  const supabase = createClient();
  const { userId, message } = await req.json();

  if (!userId || !message) {
    return NextResponse.json(
      { error: 'User ID and message are required' },
      { status: 400 },
    );
  }

  const { data: stockData } = await supabase
    .from('stock')
    .select('stock_name, detailed_data');

  // OpenAI API를 사용하여 질문에 대한 답변 생성
  const aiResponse = await generateResponse(message, stockData || []);

  const answer = aiResponse;
  if (!answer) {
    throw new Error('No response from AI');
  }

  // 생성된 답변을 Supabase의 chatbot 테이블에 저장
  const { data, error } = await supabase.from('chatbot_ai').insert({
    question: message,
    answer,
    user_id: userId,
    status: true,
  });

  if (error) {
    console.error('Error inserting data:', error);
    return NextResponse.json(
      { error: 'Error inserting data' },
      { status: 500 },
    );
  } else {
    console.log('Data insertion successful:', data);
  }

  return NextResponse.json({ data });
}

export async function DELETE(req: NextRequest) {
  const supabase = createClient();

  const chatId = await req.json();

  const { data, error } = await supabase
    .from('chatbot_ai')
    .delete()
    .eq('chat_id', chatId);

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 },
    );
  }

  return NextResponse.json({
    message: `Data ${chatId} deleted successfully.`,
    data,
  });
}
