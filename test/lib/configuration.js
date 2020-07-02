const path = require('path')
const fs = require('fs')

const system = require('./inks/system.json')
const one = require('./inks/one.json')
const equation = require('./inks/equation.json')
const equation2 = require('./inks/equation2.json')
const equation3 = require('./inks/equation3.json')
const threetimes2 = require('./inks/3times2.json')
const fence = require('./inks/fence.json')
const rabText = require('./inks/rabText.json')
const helloScratchOut = require('./inks/helloScratchOut.json')
const hello = require('./inks/hello.json')
const helloHow = require('./inks/helloHowAreYou.json')
const helloHowHighlighted = require('./inks/highlighted.json')
const helloHowEmphasized = require('./inks/emphasized.json')
const shape = require('./inks/shape.json')
const fourSquare = require('./inks/fourSquare.json')
const music = require('./inks/music.json')
const rc_es = require('./inks/rc_es_233.json')
const rc_fr = require('./inks/rc_fr_simple.json')
const rc_it = require('./inks/rc_it_216.json')
const rc_ko = require('./inks/rc_ko_262.json')

const backendHost = process.env.BACKEND_URL || 'http://localhost:8080'
const resourcesFolder = path.resolve(__dirname, '../files')
const timeoutAmplificator = process.env.NIGHTWATCH_TIMEOUT_FACTOR || 1

const inks = [{
  name: 'one',
  type: 'MATH',
  strokes: one,
  apiVersion: '',
  exports: {
    LATEX: ['1']
  }
}, {
  name: 'equation',
  type: 'MATH',
  strokes: equation2,
  apiVersion: '',
  exports: {
    LATEX: ['-', '\\sqrt {2}', 'r', '']
  }
}, {
  name: 'equation2',
  type: 'MATH',
  strokes: equation2,
  apiVersion: '',
  exports: {
    LATEX: ['-', '\\sqrt {2}', 'r', '']
  }
}, {
  name: 'equation3',
  type: 'MATH',
  strokes: equation3,
  apiVersion: '',
  exports: {
    LATEX: ['y', 'y-', 'y=', 'y=3', 'y=30', 'y=3x', 'y=3x-', 'y=3x+', 'y=3x+2']
  }
}, {
  name: 'system',
  type: 'MATH',
  strokes: system,
  apiVersion: '',
  exports: {
    LATEX: [
      '\\int', '\\int _{6}',
      '\\int _{6}^{\\infty }',
      '\\int _{6}^{\\infty }f',
      '\\int _{0}^{\\infty }\\sqrt {f}',
      '\\int _{0}^{\\infty }\\sqrt {f(}',
      '\\int _{0}^{\\infty }\\sqrt {fb}',
      '\\int _{0}^{\\infty }\\sqrt {f(x}',
      '\\int _{0}^{\\infty }\\sqrt {f\\left( x\\right) }',
      '\\int _{0}^{\\infty }\\sqrt {f\\left( x\\right) }d',
      '\\int _{0}^{\\infty }\\sqrt {f\\left( x\\right) }d7',
      '\\int _{0}^{\\infty }\\sqrt {f\\left( x\\right) }dx',
      '\\begin{align*} & \\int _{0}^{\\infty }\\sqrt {f\\left( x\\right) }dx\\\\ & c\\end{align*}',
      '\\begin{align*} & \\int _{0}^{\\infty }\\sqrt {f\\left( x\\right) }dx\\\\ & \\cos \\end{align*}',
      '\\begin{align*} & \\int _{0}^{\\infty }\\sqrt {f\\left( x\\right) }dx\\\\ & \\cos (\\end{align*}',
      '\\begin{align*} & \\int _{0}^{\\infty }\\sqrt {f\\left( x\\right) }dx\\\\ & \\cos (1\\end{align*}',
      '\\begin{align*} & \\int _{0}^{\\infty }\\sqrt {f\\left( x\\right) }dx\\\\ & \\cos (11\\end{align*}',
      '\\begin{align*} & \\int _{0}^{\\infty }\\sqrt {f\\left( x\\right) }dx\\\\ & \\cos (^{\\pi }\\end{align*}',
      '\\begin{align*} & \\int _{0}^{\\infty }\\sqrt {f\\left( x\\right) }dx\\\\ & \\cos (\\Updownarrow \\end{align*}',
      '\\begin{align*} & \\int _{0}^{\\infty }\\sqrt {f\\left( x\\right) }dx\\\\ & \\cos (\\dfrac {\\pi } {2}\\end{align*}',
      '\\begin{align*} & \\int _{0}^{\\infty }\\sqrt {f\\left( x\\right) }dx\\\\ & \\cos \\left( \\dfrac {\\pi } {2}\\right) \\end{align*}',
      '\\begin{align*} & \\int _{0}^{\\infty }\\sqrt {f\\left( x\\right) }dx\\\\ & \\cos \\left( \\dfrac {\\pi } {2}\\right) -\\end{align*}',
      '\\begin{align*} & \\int _{0}^{\\infty }\\sqrt {f\\left( x\\right) }dx\\\\ & \\cos \\left( \\dfrac {\\pi } {2}\\right) -2\\end{align*}',
      '\\begin{align*} & \\int _{0}^{\\infty }\\sqrt {f\\left( x\\right) }dx\\\\ & \\cos \\left( \\dfrac {\\pi } {2}\\right) ^{2}-2\\end{align*}',
      '\\begin{cases} \\int _{0}^{\\infty }\\sqrt {f\\left( x\\right) }dx\\\\ \\cos \\left( \\dfrac {\\pi } {2}\\right) ^{2}-2\\end{cases}'
    ]
  }
}, {
  name: '3times2',
  type: 'MATH',
  strokes: threetimes2,
  apiVersion: 'V4',
  exports: {
    LATEX: ['3', '31', '311', '3112']
  }
}, {
  name: 'fence',
  type: 'MATH',
  strokes: fence,
  apiVersion: 'V4',
  exports: {
    MATHML: {
      STANDARD: ['\<math xmlns=\'http://www.w3.org/1998/Math/MathML\'>\n' +
      '    <mrow>\n' +
      '        <mo> { </mo>\n' +
      '        <mtable columnalign=\'left\'>\n' +
      '            <mtr>\n' +
      '                <mtd>\n' +
      '                    <msqrt>\n' +
      '                        <mn> 3 </mn>\n' +
      '                    </msqrt>\n' +
      '                </mtd>\n' +
      '            </mtr>\n' +
      '            <mtr>\n' +
      '                <mtd>\n' +
      '                    <msqrt>\n' +
      '                        <mn> 6 </mn>\n' +
      '                    </msqrt>\n' +
      '                </mtd>\n' +
      '            </mtr>\n' +
      '            <mtr>\n' +
      '                <mtd>\n' +
      '                    <mi> x </mi>\n' +
      '                </mtd>\n' +
      '            </mtr>\n' +
      '        </mtable>\n' +
      '    </mrow>\n' +
      '</math>'],
      MSOFFICE: ['<math xmlns=\'http://www.w3.org/1998/Math/MathML\'>\n' +
      '    <mfenced open="{" close="">\n' +
      '        <mtable columnalign=\'left\'>\n' +
      '            <mtr>\n' +
      '                <mtd>\n' +
      '                    <msqrt>\n' +
      '                        <mn> 3 </mn>\n' +
      '                    </msqrt>\n' +
      '                </mtd>\n' +
      '            </mtr>\n' +
      '            <mtr>\n' +
      '                <mtd>\n' +
      '                    <msqrt>\n' +
      '                        <mn> 6 </mn>\n' +
      '                    </msqrt>\n' +
      '                </mtd>\n' +
      '            </mtr>\n' +
      '            <mtr>\n' +
      '                <mtd>\n' +
      '                    <mi> x </mi>\n' +
      '                </mtd>\n' +
      '            </mtr>\n' +
      '        </mtable>\n' +
      '    </mfenced>\n' +
      '</math>']
    }
  }
}, {
  name: 'hello',
  type: 'TEXT',
  strokes: hello,
  apiVersion: '',
  exports: {
    TEXT: ['h', 'he', 'hee', 'heel', 'hello']
  }
}, {
  name: 'hellov4rest',
  type: 'TEXT',
  strokes: hello,
  apiVersion: 'V4',
  exports: {
    TEXT: ['h', 'he', 'hee', 'hell', 'hello']
  }
}, {
  name: 'helloHow',
  type: 'TEXT',
  strokes: helloHow,
  apiVersion: '',
  exports: {
    TEXT: ['hello', 'hello how', 'hello how o', 'hello how are', 'hello how are you', 'hello how are you?', 'hello how are you?']
  }
}, {
  name: 'helloHowDecoHighlighted',
  type: 'TEXT',
  strokes: helloHowHighlighted,
  apiVersion: 'V4',
  exports: {
    TEXT: ['hello', 'hello how', 'hello how']
  }
}, {
  name: 'helloHowDecoEmphasized',
  type: 'TEXT',
  strokes: helloHowEmphasized,
  apiVersion: 'V4',
  exports: {
    TEXT: ['hello', 'hello how', 'hello how']
  }
}, {
  name: 'helloScratchOut',
  type: 'TEXT',
  strokes: helloScratchOut,
  apiVersion: 'V4',
  exports: {
    TEXT: ['hello', '']
  }
}, {
  name: 'rabText',
  type: 'TEXT',
  strokes: rabText,
  apiVersion: 'V4',
  exports: {
    TEXT: ['covfefe']
  }
}, {
  name: 'shape',
  type: 'SHAPE',
  strokes: shape,
  apiVersion: '',
  exports: {
    SEGMENTS: ['circle', 'circle,polyline', 'circle,polyline,rectangle']
  }
}, {
  name: 'fourSquare',
  type: 'ANALYZER',
  strokes: fourSquare,
  apiVersion: '',
  exports: {
    ANALYSIS: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
      'circle,ellipse,groups:2',
      'circle,ellipse,groups:2,isosceles triangle,rectangle,tables:2,txt:c. rd,txt:elipse,txt:rectangle,txt:triangle'
    ]
  }
}, {
  name: 'music',
  type: 'MUSIC',
  strokes: music,
  apiVersion: '',
  exports: {
    MUSICXML: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '<step>F</step>', '<step>C</step>']
  }
}, {
  name: 'rawContent_es_ES',
  type: 'Raw Content',
  strokes: rc_es,
  apiVersion: 'V4',
  exports: {
  }
}, {
  name: 'rawContent_fr_FR',
  type: 'Raw Content',
  strokes: rc_fr,
  apiVersion: 'V4',
  exports: {
  }
}, {
  name: 'rawContent_it_IT',
  type: 'Raw Content',
  strokes: rc_it,
  apiVersion: 'V4',
  exports: {
  }
}, {
  name: 'rawContent_ko_KR',
  type: 'Raw Content',
  strokes: rc_ko,
  apiVersion: 'V4',
  exports: {
  }
}]

const configurations = [{
  type: 'MATH',
  protocol: 'WEBSOCKET',
  apiVersion: 'V4',
  examples: ['/examples/v4/websocket_math_iink.html']
}, {
  type: 'MATH',
  protocol: 'WEBSOCKET',
  apiVersion: 'V4',
  alternate: 'Import',
  examples: ['/examples/v4/import_math_jiix.html']
}, {
  type: 'MATH',
  protocol: 'WEBSOCKET',
  apiVersion: 'V4',
  alternate: 'RAB',
  examples: ['/examples/v4/custom_resources_content_math.html']
}, {
  type: 'TEXT',
  protocol: 'WEBSOCKET',
  apiVersion: 'V4',
  examples: ['/examples/v4/websocket_text_iink.html']
}, {
  type: 'TEXT',
  protocol: 'WEBSOCKET',
  apiVersion: 'V4',
  alternate: 'RAB',
  examples: ['/examples/v4/custom_lexicon_text.html']
}, {
  type: 'TEXT',
  protocol: 'WEBSOCKET',
  apiVersion: 'V4',
  alternate: 'Decoration',
  examples: ['/examples/v4/highlight_words.html']
}, {
  type: 'TEXT',
  protocol: 'REST',
  apiVersion: 'V4',
  examples: ['/examples/v4/rest/rest_text_iink.html']
}, {
  type: 'Raw Content',
  protocol: 'REST',
  apiVersion: 'V4',
  examples: ['/examples/v4/rest/rest_raw_content_iink.html']
}]

const walkSync = (dir, fileList) => {
  let fileListRef = fileList || []
  fs.readdirSync(dir).forEach((file) => {
    const filename = `${dir}/${file}`
    if (fs.statSync(filename).isDirectory()) {
      fileListRef = walkSync(filename, fileListRef)
    } else {
      fileListRef.push(filename)
    }
  })
  return fileListRef
}

function getConfiguration (type, protocol, apiVersion = 'V3', inputMode, alternate) {
  const subPath = inputMode ? [type, inputMode].join('_').toLowerCase() : type.toLowerCase()
  return {
    type,
    protocol,
    apiVersion,
    header: [inputMode ? [type, inputMode].join('_') : type, protocol, apiVersion].join('_'),
    componentPath: configurations
      .filter(conf => (
        (conf.type === type) &&
        (conf.protocol === protocol) &&
        (conf.apiVersion === apiVersion) &&
        (inputMode ? conf.inputMode === inputMode : true) &&
        (alternate ? conf.alternate === alternate : true)))
      .map(conf => conf.examples)
      .reduce((a, b) => a.concat(b))
      .shift(),
    inks: inks
      .filter(ink => ((ink.type === type) && ((ink.apiVersion === apiVersion) || (ink.apiVersion === '')))),
    getFiles: () => walkSync(path.resolve(resourcesFolder, subPath))
  }
}

module.exports = {
  configurations,
  backendHost,
  resourcesFolder,
  timeoutAmplificator,
  getConfiguration
}
