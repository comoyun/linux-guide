---
tags:
  - tanishuv
  - fayllar
  - stdout
  - permissions
description: Ushbu darsda terminaldagi asosiy buyruqlar bilan tanishamiz.
title: 01 - Asosiy Buyruqlar
sort: 1
---
## Salom Dunyo!

![Salom Dunyo](./images/salom-dunyo.png)

Keling, an'anaga rioya qilgan holda "Salom Dunyo" kodini yozamiz. Terminal oynasini ochib quyidagi buyruqni kiriting:

```bash
$ echo "Salom, dunyo!" 
Salom, dunyo!
```

>**Terminal** matnga asoslangan interfeys bo'lib, buyruqlarni kiritish orqali operatsion tizim bilan o'zaro muloqot qilish imkonini beradi. 1980-yillarda grafik interfeyslari (GUI) paydo bo'lishidan oldin, terminallar kompyuterlar bilan aloqa qilishning asosiy vositasi edi.

## Parolni yangilash

Linux-da joriy foydalanuvchining parolini o'zgartirish `passwd` (password) buyrug'i yordamida amalga oshiriladi. Agar buyruq **"root"** tomonidan berilsa,  u holda faqatgina **"root"** foydalanuvchisining paroli o'zgaradi.

~~~bash
$ passwd 
Enter your first password: **** 
Enter your new password: **** 
Password set successfully!
~~~

>"root" foydalanuvchisi tizimdagi barcha buyruqlar va fayllarga **to'liq** kirish huquqiga ega bo'lgan superfoydalanuvchi hisoblanadi. Buni Windows-dagi Admin-ga ham qiyoslash mumkin. 

## Joriy papkani chop etish

`pwd` (print-working-directory) terminaldagi joriy ishchi manzilini chop etadi. 

Etibor bering `$` belgisi oddiy foydalanuvchiga, `#` belgisi esa **root** foydalanuvchiga ishora qiladi. Terminalda `#` belgisini ko'rsangiz, bilingki, siz tizim ustidan to'liq boshqaruv kuchiga egasiz; xaker sifatida bu katta yutuq hisoblanadi.

~~~bash
$ pwd
/home/khumoyun
~~~

## Papka yaratish & o'chirish

`mkdir` (make-directory) buyrug'i yordamida bir nechta papka yaratish mumkin.

```bash
$ mkdir papka1 papka2 papka3
```

**Bo'sh** papkani o'chirish uchun `rmdir` (remove-directory) buyrug'idan foydalaning. Agar papka bo'sh bo'lmasa, buyruq bekor qilinadi - papka o'chirilmaydi.

```bash
$ rmdir papka1 papka2 papka3
```

**To'ldirilgan** papkalarni quyidagi buyruq orqali o'chirish mumkin:

```bash
$ rm -r toldirilgan-papka
```

Ya'ni, bu yerda `-r` (recursive) opsiyasi papka ichidagi fayllarni hammasiga `rm` buyrug'ini beradi.

## Fayllar ro'yxatini olish

```bash
$ ls
```

Agar siz `-l`  (long-listing) opsiyasini qo'shsangiz, u ruxsatlar (permissions), o'zgartirilgan sana (last-modified-date), fayl yoki papkaga egalik qiluvchi kimsalar (owners) va boshqa ma'lumotlarni ko'rsatadi.

```bash
$ ls -l
total 36
drwxr-xr-x  4 khumoyun khumoyun 4096 Aug  7 19:10 Desktop
drwxr-xr-x  3 khumoyun khumoyun 4096 Aug  7 16:40 Documents
drwxr-xr-x  2 khumoyun khumoyun 4096 Aug  7 01:32 Downloads
...
```

Odatda, `ls` buyrug'i yashirin fayllarni ko'rsatmaydi chunki ular ko'pincha keraksiz. Buni ustiga, ekranda ortiqcha joy egallaydi. Yashirin fayllarni majburiy ko'rsatish uchun `-a` (all) opsiyasini qo'shish kifoya.

```bash
$ ls -a
```

Ba'zan siz fayl nomlarini qatorma-qator (ortiqcha ma'lumotlarsiz) ekranga chiqarishni hoxlaysiz:

```bash
$ ls -1
```

Natija (faraziy):

```
file1.txt 
file2.txt 
papka1 
papka2 
rasm.png 
script.sh
```

### Qiziq xolat

Hmm, biz `ls / > list.txt` buyrug'i "list.txt" ichiga quyidagicha natijani kiritishini kutamiz:

```
bin   dev  home  lib32  libx32      media  opt   root  sbin  srv       sys  usr
boot  etc  lib   lib64  lost+found  mnt    proc  run   snap  swap.img  tmp  var
```

Lekin aslida:

```
bin
boot
dev
etc
home
lib
lib32
lib64
libx32
lost+found
media
mnt
...
```

Yuqoridagi variant dasturchilarga qulayroq bo'lgani sababli, faylga huddi shunday tartibda yoziladi. O'ylab ko'ring, agar fayl nomlari qatorma-qator yozilsa, ularni manipulatsiya qilish ancha ossonroq bo'ladi. Masalan, pentesterlar ishlatadigan "wordlist"ni oling. 

Ko'rinib turibdiki, ba'zi buyruqlarning natijalari faylga siz kutgandek yo'naltirilmaydi va buning ortida "yaxshiroq" sabab bor.

## StdOut'ni faylga yo'naltirish

StdOut ya'ni "standart output" - dastur chiqish ma'lumotlarini yozadigan oqimdir. Odatda, ma'lumotlar ekranda ko'rinadi, ammo ularni keyinchalik ishlov berish uchun faylga yoki umuman boshqa buyruqga ham yo'naltirish mumkin.

Quyidagi buruq `new_file.txt` nomli fayl ichiga **"bu oddiy satr"** matnini kiritadi. Diqqat, agar fayl mavjud bo'lmasa, **yangisi yaratiladi**; agar fayl ichida matn bo'lsa, u **qaytadan yoziladi**:

```bash
$ echo "bu oddiy satr" > new_file.txt
```

Faylga qo'shib yozish `>>` ishorasi yordamida amalga oshiriladi:

```bash
$ echo "bu oddiy satr" >> new_file.txt
```

Shunday qilib, fayl ichida:

```new_file.txt
bu oddiy satr
bu oddiy satr
```

Tushunarli, lekin natijani qanday qilib bir nechta fayllarga bir vaqtning o'zida yozish mumkin, deb so'rasangiz, bu juda ham oddiy:

```bash
$ dastur | tee file1.txt file2.txt
```

> `tee` buyrug'i dastur natijasini bir yoki bir nechta manzillarga yozadi. Pipe operatori (|) dastur-dan chiqqan natijani `tee` buyrug'iga yo'naltirmoqda. Usbu operator haqida keyingi darslarda batafsil to'xtalib o'taman.

## Fayllarni nusxalash

Faylni nusxalash:

```bash
$ cp fayl ../masofa/fayl
```

>`./masofa/fayl` o'rniga shunchaki `./masofa/` deb yozsangiz ham bo'ladi.

Bir nechta fayllarni nusxalash:

```bash
$ cp fayl1 fayl2 fayl3 fayl4 joy/
```

Bo'sh papkani nusxalash:

```bash
$ cp papka ../masofa/papka
```

Bo'sh bo'lmagan papkani nusxalash, `-r` (recursive) opsiyasi bilan:

```bash
$ cp -r papka masofa_joy/
```

## Fayl/papkani qidirish

Bizga hozir kerak bo'ladigan buyruq ba'zi Linux distributivlarida mavjud emas; shu sababli `apt` yoki o'zingiz foydalanayotgan distributivda mavjud bo'lgan paket menejeridan `plocate` dasturini o'rnating:

>Paket menejeri - dastur o'rnatish, yangilash, sozlash va o'chirish uchun mo'ljallangan dastur. `apt` - Ubuntu kabi Debian-ga asoslangan tizimlar uchun standart paket menejeri.

```bash
$ sudo apt install plocate
$ locate hi.txt
/root/hello/hi.txt
```

>"sudo" sizga vaqtinchalik tizim darajasidagi vazifalarni bajarish uchun imtiyoz beradi. Esingizda bo'lsin: katta kuch katta mas'uliyat talab qiladi - undan oqilona foydalaning!

Agar u siz qidirayotgan narsani topolmasa, ma'lumotlar bazasini yangilang. 

```bash
$ updatedb
$ locate hi2.txt
/root/hello/hi2.txt
```

## Fayl/papka ruxsatlari

Linux-da kimlar fayl yoki papkalarni o‘qishi, yozishi yoki bajarishi mumkinligini belgilash mumkin. Quyida ruxsatlar qanday ifodalanishi haqida ma'lumot berilgan:

**Sintaksis:** *TIP + FOYDALANUVCHI_RUXSATLARI + GURUX_RUXSATLARI + BOSHQALAR*

**Tiplar:**
- **D**: directory (papka)
- **L**: link (havola)
- **F**: file (fayl)

**Misol:**

```
dr-xr-x---
```

1. **`d`**: Bu papka (directory) ekanligini bildiradi. 
2. **`r-x`**: Bu ruxsatlar egasi (owner) uchun: 
	- **`r`**: Egasi fayl yoki papkani o'qishi mumkin (read). 
	- **`x`**: Egasi papkaga kirishi yoki faylni bajarishi mumkin (execute). 
	- **`-`**: Egasi faylni o'zgartira olmaydi (write). 
3. **`r-x`**: Bu ruxsatlar guruh (group) a'zolari uchun: 
	- **`r`**: Guruh a'zolari fayl yoki papkani o'qishi mumkin (read). 
	- **`x`**: Guruh a'zolari papkaga kirishi yoki faylni bajarishi mumkin (execute). 
	- **`-`**: Guruh a'zolari faylni o'zgartira olmaydi (write). 
4. **`---`**: Bu ruxsatlar boshqalar (others) uchun: 
	- **`-`**: Boshqalar faylni o'qiy olmaydi (no read). 
	- **`-`**: Boshqalar faylni o'zgartira olmaydi (no write). 
	- **`-`**: Boshqalar faylni bajarishi yoki papkaga kirishi mumkin emas (no execute).

Pastdagi jadvalni yodlab olishni maslahat beraman - juda kerakli:

![permissions](./images/permissions.png)

## Ruxsatlarni o'zgartirish

Yuqoridagi jadvalga qarab, faylni boshqa foydalanuvchilar tomonidan boshqarilishi mumkinligini belgilash mumkin. Faylni bajariladigan qilish quyidagicha (bu shuni anglatadiki, siz uni dastur yoki skript sifatida ishlatishingiz mumkin xuddi Windows-dagi `.exe` yoki `.bat` fayllari singari):

```bash
$ chmod +x file_name.sh
```

Boshqa foydalanuvchilar shaxsiy malumotlaringizni o'qishini oldini olish uchun:

```bash
$ chmod 600 shaxsiy.txt
```

"6" - faqat siz ya'ni yaratuvchi yozish va o'qishga imkoniyatingiz bor
"00" - gurux a'zolari hamda boshqalar uchun hech qanday ruxsat yo'q

## Eng xavfli buyruq

Hech kimga **o'qish + yozish + bajarish** ruxsatini bermang - bu juda katta xato. Tizimga kirgan begona shaxslar faylga yozish va bajarish huquqiga ega bo'ladi va xavfsizlikni jiddiy ravishda tahdid qiladi.

```bash
$ chmod 777 file.txt

yoki

$ chmod guo+rwx file.txt
```

## Foydalanuvchi qo'shish/o'chirish

Foydalanuvchi qo'shish juda oddiy. Quyidagi buyruqni kiriting so'ngra siz foydalanuvchi uchun yangi parol o'rnatishingiz va bir nechta ixtiyoriy savollarga javob berishingiz kerak bo'ladi.  Ushbu vaziyatda Bob ismli foydlanuvchi yaratildi:

```bash
$ adduser Bob
```

Foydalanuvchini o'chirib tashlash:

```bash
$ deluser Bob
```

## Foydalanuvchilarni almashtirish

`su` (switch-user) buyrugi yordamida siz kompyuteringizdagi istalgan foydalanuvchining hisobiga kirishingiz mumkin. E'tibor bering, agar siz "**root**" foydalanuvchisiga o'tayotgan bo'lsangiz, `sudo`  ishlatishingiz zarur.

```bash
$ sudo su root
```

Enter bosilgach, sizdan "root" foydalanuvchisining paroli so'raladi.

## `/etc/passwd`

**/etc/passwd** fayli tizimga kirishda zarur bo'lgan ma'lumotlarni saqlaydi. Boshqacha qilib aytganda, u foydalanuvchilarning hisob ma'lumotlarini saqlaydi. **/etc/passwd** oddiy matnli fayldir.  U har bir hisob uchun foydalanuvchi identifikatori, guruh identifikatori, uy katalogi, qobiq va boshqa foydali ma'lumotlarni taqdim etadi. Batafsil [bu yerda](https://www.cyberciti.biz/faq/understanding-etcpasswd-file-format/)

## `/etc/shadow`

**/etc/shadow** faylida barcha parollaringiz shifrlangan formatda saqlanadi. Faylni faqat "root" foydalanuvchisi ko'ra oladi.

`Hashcat` va `JohnTheRipper` kabi dasturlar shifrlangan parollarni buzish uchun ishlab chiqilgan. Parol qanchalik kuchli bo'lsa, buzish shunchalik murakkab. Masalan, parol 8 ta harf va raqamdan iborat bo'lsa, uni buzish uchun bir necha daqiqadan bir necha soatgacha vaqt ketishi mumkin. Lekin, agar parol 12 ta harf, raqamlar va maxsus belgilarni o'z ichiga olsa, buzish uchun yuzlab yillar kerak! Shuning uchun murakkab va uzun parollarni tanlash muhimdir.

## `/var/log/auth.log`

Bu fayl tizimga kirgan/chiqqan foydalanuvchilar ro'yxatini saqlaydi. Quyidagi kod har soniyada `auth.log` tarkibini ekranga chiqarib turadi:

```bash
$ watch "cat /var/log/auth.log"
```

>`watch` buyrug'i real vaqtda o'zgarishlarni kuzatish uchun foydalidir.

## Sizning ikkinchi eng yaxshi do'stingiz...

Ba'zi buyruqlar yoki opsiyalarni tariflarini unutishingiz mumkin, ammo `man` deyarli barcha buyruqlarni yetarlicha tavsifini offline tarzda chiqarib beradi. Bu Google'dan keyingi ikkinchi eng yaxshi do'stingiz. Sintaksis quyidagicha:

```bash
$ man buyruq_nomi
```

Shuni yodda tutish kerakki, `man` ba'zi buyruqlar tavsifini chiqarmaydi, masalan `cd`, `exit`, `source`, `type`, `export` va hokazo. 

>**Q** tugmasini bosish orqali `man` sahifasidan chiqish mumkin.

## Linux buyruqlari - cheatsheet

Ba'zi buyruqlar esingizdan chiqishi mumkin, shu sababli ushbu cheatsheet-ni o'rnatib olishni maslahat beraman: **["cheatsheet" uchun xavola](https://raw.githubusercontent.com/comoyun/linux-guide/main/images/linux-commands-cheatsheet.png)**

```bash
$ alias cheatsheet="$(xdg-open '/.../cheatsheet.png')"
```

`alias` - taxallus ya'ni uzun buyruqlar uchun yorliq. Bu sizga eslab qolish va tezroq yozish uchun qisqa buyruqlar yaratish imkonini beradi. Misol uchun, ob-havoni `wtr` maxsus buyrug'i orqali ko'rsatadigan yorliq: `alias wtr='curl https://wttr.in/Fergana'`

Agar buyruqni bir nechta terminal seanslarida ishlashini hoxlasangiz, kod parchasini uy manzilida joylashgan `.bashrc` faylining ichiga qo'shib qo'ying. Darvoqe, `.bashrc` fayli terminal oynasi ochilganda birgalikda ishga tushadigan skript hisoblanadi.

## Samaradorlikni oshiring

1. **CTRL + L** - terminal oynasini tezkor tozalaydi
2. **CTRL + U** - kursordan chapga tozalaydi
3. **CTRL + K** - kursordan o'ngga tozalaydi
4. **CTRL + A** - kursorni satr boshiga qo'yadi
5. **CTRL + E** - kursorni satr oxiriga qo'yadi
6. **CTRL + ALT + T** - terminal oyna ochadi
7. **SUPER + TAB** - oynalarni tezkorlik bilan alishtiradi
8. **CTRL + ALT + STRELKA** - boshqa ish maydoniga olib o'tadi

---

## Topshiriq

1. **Terminalda navigatsiya**  
   Navigatsiya qilishni mashq qiling. Papkalarga sakrash, joriy papkani tekshirish kabilar.

2. **Fayllar yaratish**  
   Quyidagi fayllarni yarating va har bir faylga `echo` buyrug'i yordamida ixtiyoriy matn yozing:
   - `main.py`
   - `utils.py`
   - `config.py`

3. **Fayllarni o'chirish**  
   Yaratilgan papkalar va fayllarni o'chiring. 

[[02-dars]]da tarmoqga oid buyruqlar bilan tanishamiz. Ungacha esa olgan bilimlaringizni mustahkamlashni unutmang.