'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// From "https://raw.githubusercontent.com/PrismJS/prism/v1.6.0/components.js"
exports.default = {
  meta: {
    path: 'components/prism-{id}',
    noCSS: true,
    examplesPath: 'examples/prism-{id}',
    addCheckAll: true
  },
  markup: {
    title: 'Markup',
    aliasTitles: {
      html: 'HTML',
      xml: 'XML',
      svg: 'SVG',
      mathml: 'MathML'
    },
    option: 'default'
  },
  css: {
    title: 'CSS',
    option: 'default'
  },
  clike: {
    title: 'C-like',
    option: 'default'
  },
  javascript: {
    title: 'JavaScript',
    option: 'default',
    require: 'clike'
  },
  abap: {
    title: 'ABAP',
    owner: 'dellagustin'
  },
  actionscript: {
    title: 'ActionScript',
    require: 'javascript',
    owner: 'Golmote'
  },
  ada: {
    title: 'Ada',
    owner: 'Lucretia'
  },
  apacheconf: {
    title: 'Apache Configuration',
    owner: 'GuiTeK'
  },
  apl: {
    title: 'APL',
    owner: 'ngn'
  },
  applescript: {
    title: 'AppleScript',
    owner: 'Golmote'
  },
  asciidoc: {
    title: 'AsciiDoc',
    owner: 'Golmote'
  },
  aspnet: {
    title: 'ASP.NET (C#)',
    require: 'markup',
    owner: 'nauzilus'
  },
  autoit: {
    title: 'AutoIt',
    owner: 'Golmote'
  },
  autohotkey: {
    title: 'AutoHotkey',
    owner: 'aviaryan'
  },
  bash: {
    title: 'Bash',
    owner: 'zeitgeist87'
  },
  basic: {
    title: 'BASIC',
    owner: 'Golmote'
  },
  batch: {
    title: 'Batch',
    owner: 'Golmote'
  },
  bison: {
    title: 'Bison',
    require: 'c',
    owner: 'Golmote'
  },
  brainfuck: {
    title: 'Brainfuck',
    owner: 'Golmote'
  },
  bro: {
    title: 'Bro',
    owner: 'wayward710'
  },
  c: {
    title: 'C',
    require: 'clike',
    owner: 'zeitgeist87'
  },
  csharp: {
    title: 'C#',
    require: 'clike',
    owner: 'mvalipour'
  },
  cpp: {
    title: 'C++',
    require: 'c',
    owner: 'zeitgeist87'
  },
  coffeescript: {
    title: 'CoffeeScript',
    require: 'javascript',
    owner: 'R-osey'
  },
  crystal: {
    title: 'Crystal',
    require: 'ruby',
    owner: 'MakeNowJust'
  },
  'css-extras': {
    title: 'CSS Extras',
    require: 'css',
    owner: 'milesj'
  },
  d: {
    title: 'D',
    require: 'clike',
    owner: 'Golmote'
  },
  dart: {
    title: 'Dart',
    require: 'clike',
    owner: 'Golmote'
  },
  diff: {
    title: 'Diff',
    owner: 'uranusjr'
  },
  docker: {
    title: 'Docker',
    owner: 'JustinBeckwith'
  },
  eiffel: {
    title: 'Eiffel',
    owner: 'Conaclos'
  },
  elixir: {
    title: 'Elixir',
    owner: 'Golmote'
  },
  erlang: {
    title: 'Erlang',
    owner: 'Golmote'
  },
  fsharp: {
    title: 'F#',
    require: 'clike',
    owner: 'simonreynolds7'
  },
  fortran: {
    title: 'Fortran',
    owner: 'Golmote'
  },
  gherkin: {
    title: 'Gherkin',
    owner: 'hason'
  },
  git: {
    title: 'Git',
    owner: 'lgiraudel'
  },
  glsl: {
    title: 'GLSL',
    require: 'clike',
    owner: 'Golmote'
  },
  go: {
    title: 'Go',
    require: 'clike',
    owner: 'arnehormann'
  },
  graphql: {
    title: 'GraphQL',
    owner: 'Golmote'
  },
  groovy: {
    title: 'Groovy',
    require: 'clike',
    owner: 'robfletcher'
  },
  haml: {
    title: 'Haml',
    require: 'ruby',
    owner: 'Golmote'
  },
  handlebars: {
    title: 'Handlebars',
    require: 'markup',
    owner: 'Golmote'
  },
  haskell: {
    title: 'Haskell',
    owner: 'bholst'
  },
  haxe: {
    title: 'Haxe',
    require: 'clike',
    owner: 'Golmote'
  },
  http: {
    title: 'HTTP',
    owner: 'danielgtaylor'
  },
  icon: {
    title: 'Icon',
    owner: 'Golmote'
  },
  inform7: {
    title: 'Inform 7',
    owner: 'Golmote'
  },
  ini: {
    title: 'Ini',
    owner: 'aviaryan'
  },
  j: {
    title: 'J',
    owner: 'Golmote'
  },
  jade: {
    title: 'Jade',
    require: 'javascript',
    owner: 'Golmote'
  },
  java: {
    title: 'Java',
    require: 'clike',
    owner: 'sherblot'
  },
  jolie: {
    title: 'Jolie',
    require: 'clike',
    owner: 'thesave'
  },
  json: {
    title: 'JSON',
    owner: 'CupOfTea696'
  },
  julia: {
    title: 'Julia',
    owner: 'cdagnino'
  },
  keyman: {
    title: 'Keyman',
    owner: 'mcdurdin'
  },
  kotlin: {
    title: 'Kotlin',
    require: 'clike',
    owner: 'Golmote'
  },
  latex: {
    title: 'LaTeX',
    owner: 'japborst'
  },
  less: {
    title: 'Less',
    require: 'css',
    owner: 'Golmote'
  },
  livescript: {
    title: 'LiveScript',
    owner: 'Golmote'
  },
  lolcode: {
    title: 'LOLCODE',
    owner: 'Golmote'
  },
  lua: {
    title: 'Lua',
    owner: 'Golmote'
  },
  makefile: {
    title: 'Makefile',
    owner: 'Golmote'
  },
  markdown: {
    title: 'Markdown',
    require: 'markup',
    owner: 'Golmote'
  },
  matlab: {
    title: 'MATLAB',
    owner: 'Golmote'
  },
  mel: {
    title: 'MEL',
    owner: 'Golmote'
  },
  mizar: {
    title: 'Mizar',
    owner: 'Golmote'
  },
  monkey: {
    title: 'Monkey',
    owner: 'Golmote'
  },
  nasm: {
    title: 'NASM',
    owner: 'rbmj'
  },
  nginx: {
    title: 'nginx',
    owner: 'westonganger',
    require: 'clike'
  },
  nim: {
    title: 'Nim',
    owner: 'Golmote'
  },
  nix: {
    title: 'Nix',
    owner: 'Golmote'
  },
  nsis: {
    title: 'NSIS',
    owner: 'idleberg'
  },
  objectivec: {
    title: 'Objective-C',
    require: 'c',
    owner: 'uranusjr'
  },
  ocaml: {
    title: 'OCaml',
    owner: 'Golmote'
  },
  oz: {
    title: 'Oz',
    owner: 'Golmote'
  },
  parigp: {
    title: 'PARI/GP',
    owner: 'Golmote'
  },
  parser: {
    title: 'Parser',
    require: 'markup',
    owner: 'Golmote'
  },
  pascal: {
    title: 'Pascal',
    owner: 'Golmote'
  },
  perl: {
    title: 'Perl',
    owner: 'Golmote'
  },
  php: {
    title: 'PHP',
    require: 'clike',
    owner: 'milesj'
  },
  'php-extras': {
    title: 'PHP Extras',
    require: 'php',
    owner: 'milesj'
  },
  powershell: {
    title: 'PowerShell',
    owner: 'nauzilus'
  },
  processing: {
    title: 'Processing',
    require: 'clike',
    owner: 'Golmote'
  },
  prolog: {
    title: 'Prolog',
    owner: 'Golmote'
  },
  properties: {
    title: '.properties',
    owner: 'Golmote'
  },
  protobuf: {
    title: 'Protocol Buffers',
    require: 'clike',
    owner: 'just-boris'
  },
  puppet: {
    title: 'Puppet',
    owner: 'Golmote'
  },
  pure: {
    title: 'Pure',
    owner: 'Golmote'
  },
  python: {
    title: 'Python',
    owner: 'multipetros'
  },
  q: {
    title: 'Q',
    owner: 'Golmote'
  },
  qore: {
    title: 'Qore',
    require: 'clike',
    owner: 'temnroegg'
  },
  r: {
    title: 'R',
    owner: 'Golmote'
  },
  jsx: {
    title: 'React JSX',
    require: ['markup', 'javascript'],
    owner: 'vkbansal'
  },
  reason: {
    title: 'Reason',
    require: 'clike',
    owner: 'Golmote'
  },
  rest: {
    title: 'reST (reStructuredText)',
    owner: 'Golmote'
  },
  rip: {
    title: 'Rip',
    owner: 'ravinggenius'
  },
  roboconf: {
    title: 'Roboconf',
    owner: 'Golmote'
  },
  ruby: {
    title: 'Ruby',
    require: 'clike',
    owner: 'samflores'
  },
  rust: {
    title: 'Rust',
    owner: 'Golmote'
  },
  sas: {
    title: 'SAS',
    owner: 'Golmote'
  },
  sass: {
    title: 'Sass (Sass)',
    require: 'css',
    owner: 'Golmote'
  },
  scss: {
    title: 'Sass (Scss)',
    require: 'css',
    owner: 'MoOx'
  },
  scala: {
    title: 'Scala',
    require: 'java',
    owner: 'jozic'
  },
  scheme: {
    title: 'Scheme',
    owner: 'bacchus123'
  },
  smalltalk: {
    title: 'Smalltalk',
    owner: 'Golmote'
  },
  smarty: {
    title: 'Smarty',
    require: 'markup',
    owner: 'Golmote'
  },
  sql: {
    title: 'SQL',
    owner: 'multipetros'
  },
  stylus: {
    title: 'Stylus',
    owner: 'vkbansal'
  },
  swift: {
    title: 'Swift',
    require: 'clike',
    owner: 'chrischares'
  },
  tcl: {
    title: 'Tcl',
    owner: 'PeterChaplin'
  },
  textile: {
    title: 'Textile',
    require: 'markup',
    owner: 'Golmote'
  },
  twig: {
    title: 'Twig',
    require: 'markup',
    owner: 'brandonkelly'
  },
  typescript: {
    title: 'TypeScript',
    require: 'javascript',
    owner: 'vkbansal'
  },
  verilog: {
    title: 'Verilog',
    owner: 'a-rey'
  },
  vhdl: {
    title: 'VHDL',
    owner: 'a-rey'
  },
  vim: {
    title: 'vim',
    owner: 'westonganger'
  },
  wiki: {
    title: 'Wiki markup',
    require: 'markup',
    owner: 'Golmote'
  },
  xojo: {
    title: 'Xojo (REALbasic)',
    owner: 'Golmote'
  },
  yaml: {
    title: 'YAML',
    owner: 'hason'
  }
};