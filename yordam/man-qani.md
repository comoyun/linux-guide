---
title: '"man" qani?'
description: "\"man\" yordamchi dasturini o'rnatish."
author: Khumoyun (@comoyun)
tags:
  - man
---
![no-man](../images/no-man.png)

Bu meni hayratga soldi, chunki ilgari hech qachon "man" buyrug‘i ishlamaydigan vaziyatga duch kelmaganman. Agar siz ham rasmdagidek holatga tushsangiz, xotirjam bo‘ling, buning yechimi juda oson. 

## Yechim

Muhimi shundaki, man-sahifalarni o‘rnatuvchi paket `man-db` deb nomlanadi. O'z ilova menejeringiz orqali uni o'rnating (Ubuntu):

```bash
$ sudo apt install man-db -y
```

Keyin, bir marta bazani yangilaymiz:

```bash
$ sudo mandb
```

Tayyor, endi `man` sahifalarini bemalol ko'rsangiz bo'ladi. 

## Muqobil variantlar

Agar `man` sahifalari o'rnatilmagan bo'lsa, boshqa muqobil yechimlar ham bor. Masalan, `man` sahifalarini [onlayn](https://man7.org/linux/man-pages/) o'qishingiz mumkin yoki `cheat` buyrug'idan foydalaning. Amaliy misollar uchun men shaxsan [cheat.sh](https://cheat.sh/) saytini ma'qul ko'raman:

```bash
$ curl cheat.sh/grep
# To search a file for a pattern:
grep <pattern> <file>

# To perform a case-insensitive search (with line numbers):
grep -in <pattern> <file>

# To recursively grep for string <pattern> in <dir>:
grep -R <pattern> <dir>

# Read search patterns from a file (one per line):
grep -f <pattern-file> <file>

# Find lines NOT containing pattern:
grep -v <pattern> <file>

# Set how many lines to show before (-B) and after (-A) pattern:
grep -B 3 -A 2 <pattern> <file>

# To grep with regular expressions:
grep "^00" <file>                                               # Match lines starting with 00
grep -E "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}" <file> # Find IP add

# To find all files that match <pattern> in <dir>
grep -rnw <dir> -e <pattern>

# To exclude grep from your grepped output of ps:
# (Add [] to the first letter. Ex: sshd -> [s]shd)
ps aux | grep '[h]ttpd'
...
```
