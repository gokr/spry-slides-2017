/*
Language: Spry
*/

function(hljs) {
  return {
    aliases: ['spry'],
    keywords: {
      keyword:
        'addr and as asm bind block break case cast const continue converter ' +
        'discard distinct div do elif else end enum except export finally ' +
        'for from generic if import in include interface is isnot iterator ' +
        'let macro method mixin mod nil not notin object of or out proc ptr ' +
        'raise ref return shl shr static template try tuple type using var ' +
        'when while with without xor yield',
      literal:
        'nil undef true false',
      built_in:
        'int int8 int16 int32 int64 uint uint8 uint16 uint32 uint64 float ' +
        'float32 float64 bool char string cstring pointer expr stmt void ' +
        'auto any range array openarray varargs seq set clong culong cchar ' +
        'cschar cshort cint csize clonglong cfloat cdouble clongdouble ' +
        'cuchar cushort cuint culonglong cstringarray semistatic'
    },
    contains: [
      {
        className: 'curly',
        begin: /{\./,
        end: /\.}/,
        relevance: 10
      },
      {
        className: 'string',
        begin: /[a-zA-Z]\w*"/,
        end: /"/,
        contains: [{begin: /""/}]
      },
      {
        className: 'string',
        begin: /([a-zA-Z]\w*)?"""/,
        end: /"""/
      },
      hljs.QUOTE_STRING_MODE,
      {
        className: 'type',
        begin: /\b[A-Z]\w+\b/,
        relevance: 0
      },
      {
        className: 'number',
        relevance: 0,
        variants: [
          {begin: /\b(\d[_\d]*)/}
        ]
      },
      hljs.HASH_COMMENT_MODE
    ]
  }
}