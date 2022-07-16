// 주의: 해당 파일의 내용 변경 시 프로젝트 전체에 반영되는데 시간이 n초 가량 걸림

module.exports = {
  // 한 줄에 포함되는 최대 문자 수
  printWidth: 80,

  // 인덴테이션 당 공백 문자 수
  tabWidth: 2,

  // 인덴테이션 true: 탭 문자, false: 공백 문자
  useTabs: false,

  // 구문 끝에 세미콜론 추가 여부
  semi: true,

  // 문자열 따옴표 true: 홑따옴표 'example', false: 쌍따옴표 "example"
  singleQuote: false,

  /* 객체 프로퍼티 키 따옴표 표시
  "as-needed": 객체 내 필요한 프로퍼티 키만 따옴표
  "consistent": 객체 내 필요한 프로퍼티 키가 있는 경우 해당 객체 내 모든 프로퍼티 키에 따옴표
  "preserve": 사용자가 입력한대로 표시
  */
  quoteProps: "as-needed",

  // JSX 내 문자열 따옴표 true: 'example', false: "example"
  jsxSingleQuote: false,

  /* 마지막 항목 뒤에 comma(,) 복사+붙여넣기 시 유용
  "es5": 객체, 배열 뒤에만 추가 (한 줄이면 생략)
  "none": 추가 안함
  "all": 가능한 경우에 모두 추가, 함수 매개변수와 호출에서도
  */
  trailingComma: "all",

  // 객체 리터럴 괄호 전후로 공백 문자 삽입 true: { foo: bar} false: {foo: bar}
  bracketSpacing: true,

  // 여러 줄에 걸친 마크업 요소 닫기부호(>) 위치 true: 개행 안함, false: 개행 함
  bracketSameLine: false,

  // 화살표 함수 매개 변수 하나 일때 괄호 사용 "always": 항상 사용 (x) => x, "avoid": 사용 안함 x => x
  arrowParens: "avoid",

  /* 긴 마크다운 (주석) 텍스트 개행
  "always": print width 초과 시, print width에 맞추어 개행
  "never": 항상 한 줄로 합치기
  "preverse": 작성된 상태로 내버려두기
  */
  proseWrap: "preserve",

  /* 마크업 태그 주변 공백 취급
  "css": 해당 태그의 display 프로퍼티 기본 값
  "strict": 모든 태그 주변 공백 유지
  "ignore": 모든 태그 주변 공백 무시
  */
  htmlWhitespaceSensitivity: "css",

  /* 줄 마지막 문자
  "lf": '\n', Linux, macOS, git repo에서 주로 사용하는 방식
  "crlf": '\r\n', Windows에서 주로 사용하는 방식
  "cr": '\r', 거의 사용되지 않는 방식
  "auto": 파일의 첫째 줄 마지막 문자로 통일
  */
  endOfLine: "lf",

  /* 파일에 임베딩된 코드 포맷 여부
  "auto": Prettier가 인식할 수 있으면 자동으로 포맷
  "off": 절대 포맷하지 않음  
  */
  embeddedLanguageFormatting: "off",

  // HTML/JSX의 각 속성 개별 줄에 표시 강제 여부 true: 강제, false: 속성들이 짧으면 한 줄에도 표시 가능
  singleAttributePerLine: false,
};
