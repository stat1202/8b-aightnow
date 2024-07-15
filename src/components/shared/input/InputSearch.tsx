import Search from '@/assets/icons/search.svg';
import { useState } from 'react';

export default function InputSearch({}: // isFocusedInput,
// handleIsFocused,
{
  // isFocusedInput: boolean;
  // handleIsFocused: (isFocus: boolean) => void;
}) {
  const [isFocusedInput, setIsFocusedInput] = useState(false);

  return (
    <form
      className={`flex justify-between border rounded-lg ${
        isFocusedInput
          ? 'outline-double outline-secondary-500 border-grayscale-0'
          : 'border-grayscale-300'
      } p-4 items-center`}
      onSubmit={() => {}}
    >
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        className="b4 font-normal placeholder-grayscale-400 text-primary-900 w-[714px] outline-none"
        onFocus={() => setIsFocusedInput(true)}
        onBlur={() => setIsFocusedInput(false)}
      />
      <button tabIndex={-1} type="submit">
        <Search className={'text-grayscale-400 w-5 h-5'} />
      </button>
    </form>
  );
}
