const fse = require('fs-extra');

(() => {
  const assetsPath = './docs/src/assets';

  fse.copy('./README.md', `${assetsPath}/README.md`);
  fse.copy('./fonts/config.json', `${assetsPath}/config.json`);
  fse.copy('./icons', `${assetsPath}/icons`);
  fse.copy('./fonts', `${assetsPath}/fonts`);
})();

// 최종 빌드 css 파일 fonts/inticon.bundle.css
// package 명령어 (build 폴더에 js 묶어두기)
// [x] npm run fontello svg 파일 목록 기반으로 config.json 생성. 폰트 생성 및 다운로드 (fonts/icons)
// [x] build-font sass 파일 병합 css 생성
// [] build-docs docs 폴더로 파일 복사 & Vue 프로젝트 빌드
//    [] README.md
//    [] config.json
//    [] fonts 폴더
//    [] icons 폴더
// [] build npm run fontello && build-fonts && build-docs
// [] deploy 배포 (Optional)
