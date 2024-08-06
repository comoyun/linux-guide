---
tags:
  - xizmatlar
title: 03 - Xizmatlar
description: Linux-dagi turli-xil xizmatlar va ularning boshqaruvi haqida gaplashamiz.
sort: 3
---
## Zarur!

Agar Linux'ni o'rganayotgan bo'lsangiz, siz IP manzillar, subnet, OSI Model, TCP/UDP protokollar, tunneling, port, va xost kabi tarmoq bilan bog'liq terminlarga duch kelasiz. Shu sababli, bu terminlar haqida Internetda yetarlicha tadqiqot (research) qilishingizni maslahat beraman. Muhimi, dangasa bo'lmaslik kerak. Siz buni uddalaysiz! ;). Ba'zi terminlar:

- **Networking Fundamentals**
- **CCNA Course**
- **[Networking for Dummies](https://edu.anarcho-copy.org/TCP%20IP%20-%20Network/Networking%20For%20Dummies.pdf)** (kitob)
- **Network Administration Course**
- **Network Penetration Testing Course**

## Fayllar yaratish va o'chirish

`touch` buyrug'i nafaqat fayllarning o'zgartirilgan sanasini yangilaydi, balki yangi fayllar yaratishga ham qodirdir:

```bash
$ touch fayl-1 fayl-2 fayl-3 fayl-4 fayl-5
$ ls
fayl-1  fayl-2  fayl-3  fayl-4  fayl-5
```

Barcha fayllarni o'chirish uchun "\*" belgisidan foydalanasiz:

```bash
$ rm *
$ ls
```

> Ba'zan internetda `sudo rm -rf /` buyrug'i bilan "meme"larga duch kelasiz. Bu buyruq **sistemadagi barcha fayllarni o'chirib tashlaydi** va bu qaytarib bo'lmas jarayon.

![rm meme](./images/rm-meme.jpg)

## Ommaviy IP manzilni aniqlash

Kompyuteringizning ommaviy IP (Internet Protocol) manzilini aniqlash uchun quyidagi buyruqni ishlating:

```bash
$ curl ifconfig.me
xxx.xx.xx.xxx
```

Muqobil ravishda, [ifconfig.me](https://ifconfig.me) saytiga tashrif buyurishingiz mumkin (aytgancha, men proxy'dan foydalanayapman :) ).

![ifconfig-me-page](./images/ifconfig-me-page.png)

## `service` va `systemctl`

`service` va `systemctl` tizim xizmatlarini boshqarish uchun ishlatiladi. Ular xizmatlarni yoqish, o'chirish, qayta ishga tushirish imkoniyatini beradi. Farqi, `systemctl` yanada keng imkoniyatlarga ega va xizmatlarni boshqarishning standart usuli sifatida qabul qilinmoqda.

> **systemctl** = yangi usul  
> **service** = eski usul

## Veb-server yaratish

Veb-server yaratish uchun `apache2` dasturini o'rnatish zarur:

```bash
sudo apt install apache2
```

So'ngra, quyidagi buyruq orqali veb-serverni 80-portda ishga tushiring:

```bash
$ service apache2 start
```

Veb-server muvaffaqiyatli ishga tushganini bilish uchun `service apache2 status` buyrug'ini kiritishingiz mumkin. U quyidagidek xabarni ko'rsatishi kerak:

```bash
$ service apache2 status
● apache2.service - The Apache HTTP Server
     Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor preset: enabled)
     Active: active (running) since Sat 2023-08-12 04:42:14 EDT; 2h 0min ago
       Docs: https://httpd.apache.org/docs/2.4/
    Process: 901 ExecStart=/usr/sbin/apachectl start (code=exited, status=0/SUCCESS)
   Main PID: 959 (apache2)
      Tasks: 55 (limit: 4474)
     Memory: 7.3M
        CPU: 538ms
     CGroup: /system.slice/apache2.service
             ├─959 /usr/sbin/apache2 -k start
             ├─961 /usr/sbin/apache2 -k start
             └─962 /usr/sbin/apache2 -k start
```

Endi brauzeringizni ochib, "[localhost](http://localhost)" yoki [127.0.0.1](http://127.0.0.1) manzilini kiriting.

![apache2-web-server.png](./images/apache2-web-server.png)

Veb-sahifani to'liq o'zgartirish uchun fayl-menejeringizni `/var/www/html/` joylashuvida oching va o'zingizning veb sahifalaringizni shu yerga joylashtiring (`index.html` - saytning bosh sahifasi). Veb-serverni o'chirib qo'yish uchun `service apache2 stop` buyrug'ini ishlatishingiz mumkin.

## SSH serverni ishga tushirish

Avval `openssh-server` dasturini o'rnatish zarur (bu kompyuterda tashqi qurilmalar ulanishi mumkin bo'lgan ssh port yaratadi):

```bash
sudo apt install openssh-server
```

So'ng, ssh xizmatini yoqishingiz mumkin (bilaman, `service` buyrug'i eski, lekin bu barcha Linux distributivlarida ishlaydi):

```bash
$ service ssh start
```

Status, ya'ni holatini aniqlash uchun:

```bash
$ service ssh status
● ssh.service - OpenBSD Secure Shell server
     Loaded: loaded (/lib/systemd/system/ssh.service; enabled; vendor preset: enabled)
     Active: active (running) since Sat 2023-08-12 04:42:14 EDT; 2h 19min ago
       Docs: man:sshd(8)
             man:sshd_config(5)
    Process: 909 ExecStartPre=/usr/sbin/sshd -t (code=exited, status=0/SUCCESS)
   Main PID: 931 (sshd)
      Tasks: 1 (limit: 4474)
     Memory: 2.1M
        CPU: 52ms
     CGroup: /system.slice/ssh.service
             └─931 "sshd: /usr/sbin/sshd -D [listener] 0 of 10-100 startups"
```

SSH xizmatining muvaffaqiyatli ishga tushganini ko'rishingiz mumkin. Endi siz istalgan qurilma orqali kompyuteringizga bog'lanishingiz mumkin (ular bir xil tarmoqda bo'lishi yoki kompyuteringizga ommaviy IP ulangan bo'lishi kerak, va port-forwarding xususiyati mavjud bo'lishi kerak - ba'zi routerlarda bunday funksiyalar mavjud va ularni gateway IP manziliga brauzer orqali kirib sozlash mumkin). Misol:

```bash
$ ssh root@192.168.43.5
password: ****
successfully logged in as user "root"
root~#
```

SSH haqida ko'proq ma'lumot olish uchun quyidagi resurslarni ko'rib chiqing:

- **[SSH nima?](https://www.websiterating.com/uz/web-hosting/glossary/what-is-ssh/)**
- **[Ubuntu'da SSH server o'rnatish](https://uz.termotools.com/8299-installing-ssh-server-in-ubuntu.html)**

## Xizmatlar boshqaruvi - `systemctl`

Xizmatlarni boshqarish uchun `systemctl` buyrug'idan foydalaning:

```bash
$ systemctl <verb> <service>

<verb> = start/restart/stop
<service> = ssh/apache2/nginx/...
```

### Xizmatni yoqish

```bash
$ systemctl start ssh
```

### Xizmatni o'chirish

```bash
$ systemctl stop ssh
```

### Xizmatni qayta ishga tushirish

```bash
$ systemctl restart ssh
```

## Foydali qismlar

- **CTRL + C** - ko'pincha script yoki terminaldagi dasturdan chiqish uchun ishlatiladi.
- **CTRL + D** - terminal yoki dasturdan chiqish uchun ishlatiladi.
- **CTRL + SHIFT + C** - belgilangan matnni nusxalaydi.
- **CTRL + SHIFT + V** - nusxalangan matnni belgilangan joyga qo'yadi.

---

## Topshiriq

### 1: Tarmoqni Tahlil Qilish

1. `nmap` yordamida o'z kompyuteringizdagi barcha ochiq portlarni aniqlang va ularga qanday xizmatlar bog'langanligini tahlil qiling.
2. Har bir port uchun bog'langan xizmatlarning versiyalarini aniqlang va ularni Internetda qidirib toping. 

### 2: Veb-server

1. `/etc/hosts` fayli haqida o'rganing.
3. Apache konfiguratsiyasida qanday qilib xavfsizlikni yaxshilash to'g'risida biroz izlanish olib boring.

### 3: SSH Serverni Boshqarish

1. SSH orqali boshqa bir serverga ulanib, birorta fayl yuklab oling.
2. SSH xizmatining xavfsizligini oshirish uchun konfiguratsiyani sozlang. Misol uchun, `root` hisobini qulflang.

**Keyingi dars:** [[04-dars]]