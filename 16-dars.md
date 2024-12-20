---
title: 16 - Terminaldagi Foydali Amallar
description: Terminaldan yanada samarali foydalanish maqsadida ushbu darsda keltirilgan amallarni o'rganing.
sort: 16
author: Khumoyun (@comoyun)
tags:
  - foydali
---

![hacker-meme](images/hacker-meme.png)

## Yoyish

Terminaldagi eng muhim xususiyatlardan biri "***expansion***" ya'ni ***yoyish*** hisoblanadi. Bu nimaligini misollarda ko'rib chiqamiz:

```bash
$ echo {1..5}
1 2 3 4 5
$ echo {01..05}
01 02 03 04 05 
$ echo {001..005}
001 002 003 004 005
$ echo {10..30..5} # 5 qadam tashlaydi
10 15 20 25 30
$ echo {10..1}
10 9 8 7 6 5 4 3 2 1
```

Alifbo tartibida ham chiqarish mumkin:

```bash
$ echo {a..z}
a b c d e f g h i j k l m n o p q r s t u v w x y z
$ echo {A..Z}
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
$ echo {z..a}
z y x w v u t s r q p o n m l k j i h g f e d c b a
```

"," belgisini orqali ajratib yozmoqchi bo'lsangiz:

```bash
$ echo {1..5},
1, 2, 3, 4, 5,
```

E'tibor bering, vergulni `}` belgisidan so'ng joy tashlamay yozdik. Aks holda manabu natija chiqar edi:

```bash
$ echo {1..5} ,
1 2 3 4 5 ,
```

Raqamlar orasidagi bo'shliqni olib tashlash uchun `tr` buyrug'idan foydalanishingiz mumkin (delimeter optsiyasi berilgan belgilarni matn ichidan olib tashlaydi):

```bash
$ echo {1..5} | tr -d ' '
12345
```

Yoyish ichida yoyish?

```bash
$ echo a{A{1,2},B{3,4}}b 
aA1b aA2b aB3b aB4b
```

`*` belgisi ham yoyish vazifasini bajaradi:

```bash
$ echo *
Dilbar-shaxsiy Firdavs-shaxsiy Khumoyun-shaxsiy
$ echo K*
Khumoyun-shaxsiy
$ echo /usr/*/share 
/usr/kerberos/share /usr/local/share
```

Yana bir foydali yoyish uslubi: buyruq natijasi `$()` o'rniga qo'yiladi.

```bash
[root@debian] echo $((2 + 2))
4
[root@debian] echo $(((5 ** 2) * 3)) 
75
[root@debian] echo "5ni 2ga bo'lganda qoldiq - $((5 % 2))"
[root@debian] echo "Men $(whoami)"
Men root
[root@debian] ls -lah $(which cp) # `which` ilova manzilini chiqaradi
-rwxr-xr-x 1 root root 71516 2007-12-05 08:58 /bin/cp
```

>`$()` o'rniga `` belgilarini  ishlatishingiz mumkin.

Mavjud hisob amallari:

| Amal | Tavsif | 
|------|--------| 
| + | Qo'shish | 
| - | Ayirish | 
| * | Ko'paytirish | 
| / | Bo'lish | 
| % | Modulo, oddiy ma'nosi "qoldiq" | 
| ** | Darajaga oshirish 

Tushunarliku, lekin "Bularning menga nima foydasi bor?" deb so‘rasangiz - foydasi ko‘p. Bu faqat ’echo‘ buyrug‘ida emas, balki barcha buyruqlar bilan ishlaydi. Misol uchun, yoyishni `touch` yoki `rm` kabi buyruqlar bilan qo‘llash orqali uzoq va mashaqqatli jarayonlarni ancha osonlashtirish mumkin.

![wow-meme](images/wow-meme.png)

Quyidagi bir nechta xayotiy misollarga qarang:

```bash
$ touch hujjat-{qoralama,navbat1,navbat2,oxirgi}.txt
$ ls
hujjat-navbat1.txt  hujjat-navbat2.txt  hujjat-oxirgi.txt  hujjat-qoralama.txt
$ rm hujjat-{qoralama,navbat1,navbat2,oxirgi}.txt # o'chirib yuboradi
$ touch fayl{1..10}.txt
$ ls
fayl1.txt fayl2.txt fayl3.txt fayl4.txt fayl5.txt fayl6.txt fayl7.txt fayl8.txt fayl9.txt fayl10.txt
```

Fotograf sifatida rasmlaringizni oy, yillarga qarab saralashni hoxlaysiz:

```bash
$ mkdir {2004..2007}-{01..12}
$ ls -1
2004-01
2004-02
2004-03
2004-04
2004-05
2004-06
2004-07
2004-08
2004-09
2004-10
2004-11
2004-12
2005-01
2005-02
2005-03
2005-04
2005-05
2005-06
2005-07
2005-08
2005-09
2005-10
2005-11
2005-12
```

Aytaylik, bir nechta foydalanuvchi uchun shaxsiy papka yaratmoqchisiz:

```bash
$ mkdir {Khumoyun,Dilbar,Firdavs}-shaxsiy
$ ls
Dilbar-shaxsiy  Firdavs-shaxsiy  Khumoyun-shaxsiy
```

Yana bir misol, yoyish yoramida IP adresni chiqarib beradigan buyruq (`curl` berilgan veb-manzilga tashrif buyurib kontentini ekranga chiqaradi, va `-s` optsiyasi ***silent*** - ortiqcha ma'lumotlarni berkitadi):

```bash
$ echo "Mening IP manzilim: $(curl -s ifconfig.me)"
Mening IP adresim: 95.214.210.XXX
```

Ushbu buyruq **192.168.0.0** dan **192.168.255.255** gacha bo'lgan IP manzillarni chiqaradi:

```bash
$ echo 192.168.{0..255}.{0..255}
192.168.0.0 192.168.0.1 192.168.0.2 192.168.0.3 192.168.0.4 192.168.0.5 192.168.0.6 192.168.0.7 192.168.0.8 192.168.0.9 # davom etadi
...
```

Quyida qo'shtirnoq ichida yoyishning talqin qilinishi:

```bash
[khumoyun@debian] echo text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER 
text /home/me/ls-output.txt a b foo 4 me
[khumoyun@debian] echo "text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER" 
text ~/*.txt {a,b} foo 4 me 
[khumoyun@debian] echo 'text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER' 
text ~/*.txt {a,b} $(echo foo) $((2+2)) $USER
```

## Boshqaruvchi belgilar

Terminalda buyruqlar bajarilish ketma-ketligini belgilash mumkin. 

```bash
$ sudo apt update && sudo apt upgrade # agar update muvaffaqaiyatli yakunlansa, upgrade bajariladi
```

Agar birinchi buyruq xatolik bilan yakunlansa keyingi buyruq bajarilmaydi.

```bash
$ ls mavjud-bulmagan-papka && cd mavjud-bulmagan-papka
```

Agar papka mavjud bo'lmasa yaratadi:

```bash
$ ls papka || mkdir papka  # birinchi buyruq xatolik bilan yakunlansa, ikkinchi buyruq bajariladi. Agar birinchi buyruq muvaffaqiyatli bajarilsa, ikkinchi buyruq bajarilmaydi.
```

Agar papka mavjud bo'lmasa, ekranga bu haqida habar chiqaradi:

```
$ ls mavjud-bulmagan-papka || echo papka mavjud emas
papka mavjud emas
```

Bir nechta buyruqlarni birdaniga bajaradi:

```bash
$ touch fayl-{1..5}.txt ; ls
fayl-1.txt  fayl-2.txt  fayl-3.txt  fayl-4.txt  fayl-5.txt
```

Jarayonni orqa fonga qo'yadi:

```bash
$ sleep 10 && touch men-tugildim & # 10 soniyadan so'ng `men-tugildim` nomli fayl yaratadi, lekin bu vaqt oralig'ida boshqa amallarni bajarish mumkin...
$ ls
men-tugildim
```

## `cat` - matn muharriri?

![cat-writing](images/cat-writing.png)

`cat` buyrug'idan matn muharriri sifatida foydalanish mumkinligini bilarmidingiz? bu menga juda ko'p vaziyatlarda as qotgan. Misol uchun serverda `nano`, `vim` kabi dasturlar bo'lmasligi mumkin, lekin `cat` hamma joyda mavjud! 

```bash
$ cat > matn.txt
Hey!
cat mening eng sevimli buyruqlarimdan biri.
```

**CTRL + D** klavishlarini bosib chiqib keting va faylga qanday yozilganini tekshirib ko'ring, albatta `cat` orqali.

## Fayl yaratish

Hech qanday buyruqlarsiz fayl yaratish:

```bash
$ > fayl.txt
```

## Fayl qidirish

1. `find -name fayl-nomi`
	- Masalan: `find -name *.txt` (barcha `.txt` kengaytmali fayllarni qidiradi)
2. `find -type d -name "config"`
	- `config` nomli papkalarni qidiradi. `-type` orqali qidirayotgan narsamizni turini belgilashimiz mumkin: `d` (directory) va `f` (file)
3. `find -type f -size +1M`
	- fayllarni o'lchamiga ko'ra qidiradi. Bu yerda 1 megabayt (MB) dan katta fayllarni ro'yxatini chiqaradi.

 Albatta yuqoridagilarni barchasini birlashtirib murakkab qidiruvlarni amalga oshirishimiz mumkin. Misol uchun quyidagi buyruq "Documents" katalogidagi 5MB-dan yuqori bo'lgan barcha PDF kengaytmali fayllarning ro'yxatini chiqaradi.

```bash
$ find ~/Documents -type f -name "*.pdf" -size +5M
```

Aytaylik, siz "Documents" katalogidagi oxirgi 3 kun ichida o'zgartirilgan `.txt` fayllarni qidiryapsiz:

```bash
$ find ~/Documents -type f -name "*.txt" -mtime -3
```

## `less` - matnlarni qulay o'qish

`cat` katta hajmdagi matnli fayllarni o'qish uchun biroz noqulay va fayl hajmiga qarab juda ko'p vaqt sarflaydi. `less` bu noqulayliklarni bartaraf etadi. Kommandani terganingizda `vim` (kod muharriri) oynasi ochilib fayl kontentini huddi matn muharriridek ochib ko'rsatadi. `vim`-dagi deyarli barcha funksiyalarni qo'llashingiz mumkin. Menga yoqadigani qidiruv xususiyatidir. Birorta faylni ochib `/termin` satrini yozing va dastur avtomatik ravishda topilgan natijalarni matn ichidan ko'rsatadi. Aytgancha, `less` oynasini yopish uchun shunchaki `q` klavishini bosing.

```bash
$ less matn.txt
```

Yana bir misol:

```bash
$ ffprobe -h | less
```

**Keyingi dars:** [[17-dars]]