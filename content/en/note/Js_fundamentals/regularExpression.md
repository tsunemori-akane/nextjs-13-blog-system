---
title: "正则表达式"
# date: 2020-04-24T16:40:00+01:00
type: docs
weight: 3
# description: Resources typically useful in the later stages of development
# aliases: ["/docs/community/"] 
# tags:
# - Software Architect
# - v6
---

## History of Regular Expression

- concept developed in 1950 by mathematician Stephen Keene
- Became regularly used by Unix text processing utilities.
- Many different variations became standardized by the POSIX standard
- A version of regular expressions was used in Perl in the 1980s.
- In 1997 Philip Hazel developed PCRE for use in many modern tools

## create a RegEx in JS

- `let regex1 = new RegExp(’hello’)`
- `let regex2 = /world/`

## About Methods

### RegExp Methods

- test: returns true if pattern is found in the passsed string; false if not
- exec: returns an array of matches
- toString: returns a string of the regular expressions syntax

### String Methods

- match: returns an array of matches just like exec on RegExp.
- search: returns an index of the matched string
- replace: replaces matches with string
- split: splits a string into an array. The division is based on the regular expression pattern

## Regular Expression Flags

- `/pattern/flags` or `new RegExp(”pattern”, “flags”)`
- `g`  match more than one occurance
- `i`  insensitive match
- `m` multi-line match

## That Metacharacters

- `wildcard .`  It represents any single character
- `escaped character \` It mathces a “.” character
- `hyphen -` like 0-9 or a-z
- `square brace []` range
- `+`  Matches one or more occurrences
- `?`  Matches zero or one occurrences
- `*`. Matches zero or more occurrences
- `{min,}`  `{min, max}`  `{min}`
- `\b` Word boundary-Pattern bounded by a non-word character
- `\B` Nonword boundary-Pattern bounded by a word character

## Character Set Shorthand

- `\d [0-9]`  `\D [^0-9]`
- `\w [a-zA-Z0-9_]`  `\W [^a-zA-Z0-9_]`
- `\s [\t\r\n]`  `\S [^\t\r\n]`

## Groupback reference

<!-- <tabel>
<tr>
<td></td>
<td></td>
</tr>
</table> -->

![gr_1.png](/note/images/js_fundamental/gr_1.png)


![gr_2.png](/note/images/js_fundamental/gr_2.png)

- non capture group 使用 `?:` 比如 `(?:\w+)`

<img src="/note/images/js_fundamental/gr_3.png"/>

<img src="/note/images/js_fundamental/gr_4.png"/>


## unicode character