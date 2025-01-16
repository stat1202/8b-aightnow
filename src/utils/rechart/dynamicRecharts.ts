import dynamic, { Loader } from 'next/dynamic';
import React from 'react';

type ComponentPath = 'AreaChart';

// function renderChart(componentPath: ComponentPath) {
//   const recharts = import('recharts');
//   const rechartsMap = {
//     AreaChart: () => recharts.then((mod) => mod.AreaChart),
//   };

//   return rechartsMap[componentPath];
// }

/**
 * 주어진 컴포넌트 경로에 따라 동적으로 Recharts 컴포넌트 Import
 * 
 * @description
 *  - defaultProps 문제 recharts@2.13.0-alpha.1 버전 사용
 *  - alpha 버전을 사용하고 싶지 않다면, 임시로 경고를 가리기 위해 아래 코드 사용
    console.error = (...m: any) => {
      if (/defaultProps/.test(m[0])) return;
    };

 * @param componentPath - 불러올 컴포넌트의 경로 문자열
 * @returns Recharts 컴포넌트를 반환하는 Promise 객체
 */
// 동적 로드용 컴포넌트 로더 함수
export function renderChart(
  componentPath: string,
): () => Promise<React.ComponentType<any>> {
  return async () => {
    const myModule = await import(componentPath);
    return myModule.default || module;
  };
}

// 동적 import 함수
export function dynamicImport(componentPath: string) {
  return dynamic(() => renderChart(componentPath)(), {
    ssr: false, // 서버 사이드 렌더링 비활성화
  });
}
