---
title: 22 - "sort" va "uniq"
description: '"sort" va "uniq" buyruqlari bilan ishlash'
sort: 22
author: Khumoyun (@comoyun)
tags:
  - sort
  - uniq
  - fayl-manipulatsiya
---
![uniq-u-meme](./images/uniq-u-meme.png)

`sort` va `uniq` fayllarni manipulatsiya qilishda as qotadigan buyruqlar hisoblanadi. Xaker sifatida, 'wordlist' fayllaridagi dublikatlarni o'chirish yoki saralashni xohlaysiz. Dasturchi sifatida csv, log, dat kabi fayllarni ustun bo'yicha saralashni hoxlaysiz. Oddiy foydalanuvchi sifatida esa kontaktlar ro'yxati yoki oddiy txt fayllardagi ortiqcha qatorlarni bir zumda o'chirishni hoxlaysiz. Aynan shunday vaziyatlarda `sort` va `uniq` buyruqlari ayni muddao.

## `sort`

`sort` buyrug'i qatorlarni alifbo va raqamlar bo'yicha tartiblaydi. Aytaylik sizda "raqamlar.txt" fayli bor va u quyidagi matnga ega:

```
9
8
7
6
5
4
3
2
1
```

Endi, shunchaki `sort raqamlar.txt` buyrug'ini yozing va quyidagi natija ekranga chiqadi:

```
1
2
3
4
5
6
7
8
9
```

>Qaniydi garderobimni shunday tartiblay olsam 🙂

Buni ekranga emas faylga yo'naltirish ham mumkin, `>` yoki `>>` operatorlari orqali. Masalan:

```bash
$ sort raqamlar.txt > saralangan-raqamlar.txt
```

Saralash tartibini `-r` (reverse) opsiyasi bilan **teskari** qilish mumkin.

```bash
$ sort raqamlar.txt -r
9
8
7
6
5
4
3
2
1
```

*Qatorlarni tasodifiylashtirishni iloji bormi?* deb so'rasangiz, ha. Bu juda osson. Shunchaki `-R` opsiyasini bersangiz bo'ldi:

```bash
$ sort saralangan-raqamlar.txt -R
5
4
1
6
9
8
2
3
7
```

Siz nafaqat raqamlarni balki so'z va harflarni ham saralay olasiz. Keling hozir mevalarni bir nechta usulda "sortirovka" qilamiz :)

```bash
$ cat mevalar.txt # fayl matni
olma
anor
nok
gilos
tarvuz
qovun
$ sort mevalar.txt 
anor
gilos
nok
olma
qovun
tarvuz
$ sort mevalar.txt -r
tarvuz
qovun
olma
nok
gilos
anor
```

## `uniq`

E'tibor bergan bo'lsangiz quyidagi "raqamlar.txt" faylida bir nechta dublikat qatorlar mavjud.

```bash
$ cat raqamlar.txt
9
9
8
7
7
6
5
5
4
3
2
2
1
```

`uniq` buyrug'i dublikat qatorlarni o'chiradi.

```bash
$ uniq raqamlar.txt 
9
8
7
6
5
4
3
2
1
```

Uxx, "mevalar-2.txt" faylida ortiqcha mevalar borga o'xshaydi:

```bash
$ cat mevalar-2.txt
olma
Anor
nok
qovUn
gilos
qovun
noK
anor
Olma
tarvuz
qovun
```

"Nega hamma narsa tartibsiz? Buni nima balo toshmat yozdimi oyog'ida!" desangiz, yo'q. Ba'zida bundan ham battar fayllarga duch kelasiz. Keling, bunday muommolarni qanday hal qilishni ko'rib chiqamiz.

Avvalo `sort` yordamida saralaymiz, shunda dublikat qatorlar birga bo'lib qoladi va `uniq` ortiqcha qatorlarni o'chirib tashlaydi.

```bash
$ sort mevalar-2.txt | uniq
anor
Anor
gilos
nok
noK
olma
Olma
qovun
qovUn
tarvuz
```

E'tibor bergan bo'lsangiz "anor" va "Anor" ikki xil bo'lgani uchun dublikat deb sanalmagan. Buni to'g'irlash uchun `-i` (insensitive) opsiyasini ishlatamiz:

```bash
$ sort mevalar-2.txt | uniq -i
anor
gilos
nok
olma
qovun
tarvuz
```

*"Faqat dublikat qatorlarni ekranga chiqarsam bo'ladimi?"*, deb so'rasangiz, ha. Bu juda osson. Shunchaki `-id` opsiyalarini qo'llang, ya'ni bu yerda "i" katta kichikli nomlarni e'tiborsiz qoldiradi, "d" `uniq`-ning xarakterini teskari qilib qo'yadi, ya'ni dublikatlarni o'chirish o'rniga faqat o'shalarni ekranga chiqaradi.

```bash
$ sort mevalar-2.txt | uniq -id
anor
nok
olma
qovun
```

## Bonus

Yuqoridagi "mevalar-2.txt" faylini birgina buyruq orqali tartibga keltirish mumkin:

```bash
$ sort -fu mevalar-2.txt
```

## Topshiriq

1. "ismlar.txt" nomli fayl mavjud va uning tarkibi quyidagicha:

```
Jasur 
jasur 
JASUR 
Anvar 
ANVAR 
anvar 
Malika 
malika
```

Fayldagi nomlarni katta-kichik harflarga e'tibor bermay saralang va takroriy ismlarni o'chirib tashlang.

2. "mevalar.txt" nomli fayl mavjud va uning tarkibi quyidagicha:

```
olma 
olma 
nok
nok
gilos 
anor 
anor 
qovun 
tarvuz 
qovun
```

Endi faqat takroriy yozilgan meva nomlarini ekranga chiqarishingiz kerak.

3. "hodimlar.csv" nomli fayl mavjud va uning tarkibi quyidagicha:

```
ID,Ism,Yosh 
1,Anvar,30 
2,Malika,25 
3,Shoxrux,27 
4,Nodir,22 
5,Dilbar,29
```

Bu faylni **yosh** ustuni bo'yicha saralang. Masalan, kichik yoshdan katta yoshga qarab ketishi kerak.

4. "mevalar.txt" nomli fayl bor, va uning tarkibi quyidagicha:

```
olma
nok
olma
anor
nok
qovun
anor
qovun
qovun
```

Fayldagi har bir qator **necha marta** takrorlanganini aniqlang.

5. Quyidagi buyruq nima vazifa bajaradi deb o'ylaysiz?

```bash
ls /bin /usr/bin | sort | uniq | grep zip
```

---

**Keyingi dars:** [[23-dars]]