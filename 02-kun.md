## Tarmoq haqidagi ma'lumotlarni ko'rsatish

Siz o'zingizning ichki IP manzilingizni Windows'dagi `ipconfig` buyrug'iga o'xshab ko'rishingiz mumkin:

```bash
$ ifconfig 
```

Muayyan Wi-Fi adapteri haqida malumot olish:

```bash
$ ifconfig wlan0 
```

## Xost tirik yoki yo'qligini tekshirish

```bash
$ ping localhost
PING localhost (127.0.0.1) 56(84) bytes of data.
64 bytes from localhost (127.0.0.1): icmp_seq=1 ttl=64 time=0.030 ms
64 bytes from localhost (127.0.0.1): icmp_seq=2 ttl=64 time=0.039 ms
64 bytes from localhost (127.0.0.1): icmp_seq=3 ttl=64 time=0.040 ms
^C
--- localhost ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2050ms
rtt min/avg/max/mdev = 0.030/0.036/0.040/0.004 ms
```

localhost **127.0.0.1** bilan barobar. Ba'zilar `ping` buyrug'ini xostning IP manzilini bilish uchun ishlatadilar.

> ping'dan chiqish uchun **CTRL + C** tugmalarini bosing yoki `ping -c 3 localhost` kommandasini bering va dastur serverga 3 marta so'rov yuboradi va tamomlagach dastudan avtomatik chiqib ketadi. 

## IP manzillarni MAC manzillari bilan bog'lash

MAC manzillar ARP kesh ichida saqlangan bo'ladi. Ko'rish uchun quyidagi buyruqni kiriting:

```bash
$ arp -a
Internet Address       Physical Address       Type
192.168.1.1            00-11-22-33-44-55     dynamic
192.168.1.10           10-22-33-44-55-66     dynamic
192.168.1.20           20-33-44-55-66-77     dynamic
```

Kompyuterdagi ochiq portlar va ular bilan bog'langan dasturlarni bilish uchun `netstat` buyrug'idan foydalaning.

```bash
$ netstat -tul
```

- "**-t**" : TCP bog'lanishlarni ichiga oladi.
- "**-u**" : UDP bog'lanishlarni ichiga oladi.
- "**-l**" : ochiq portlarni ichiga oladi.

## Buyruqlar tarixini qanday ko'rish mumkin?

```bash
$ history
  1  sudo apt update
  2  sudo apt upgrade
  3  clear
  4  history
```

Yoki...

```
$ cd ~
$ cat .bash_history
```

Tarixini tozalash uchun `-c` (clear). Misol:

```bash
$ history -c
$ history
  1  history
```

## "Uy"ga qaytish

`cd` (change-directory) buyrug'i orqali terminalni istalgan manzilga yo'naltirishingiz mumkin. Uyga ya'ni agar "root" foydalanuvchi bo'lsa `/root` oddiy foydalanuvchi uchun esa `/home/username` o'zgartiradi.

```bash
$ cd ~
```

Siz `cd` buyrug'ini hech qanday argumentlarsiz yozish orqali ham bir xil natijaga erishishingiz mumkin.

```bash
$ pwd
/home/khumoyun/Downloads/never-gonna-give-you-up/
$ cd
$ pwd
/home/khumoyun
```

## Fayl kontentini ko'rish

`cat` (concatinate) asosan 2 yoki undan ortiq fayllarni bir-biriga bog'lash uchun ishlatiladi, lekin siz bu buyruq orqali kichik fayllar ichidagi kontentni terminal ichida ko'rish uchun ham ishlatishingiz mumkin:

```bash
$ echo "Linux ajoyib!" > linux.txt
$ cat linux.txt
Linux ajoyib!
```

Fayllarni bir-biriga bog'lash:

```bash
$ cat file.txt file-2.txt file-3.txt > file-4.txt
```

## Bo'sh bo'lmagan papkalarni o'chirish

```bash
$ rm papka papka2 papka3 -rf
```

Bu yerda:

   `-r` (recursive) optsiyasi:
        -r opsiyasi kataloglar va ularning tarkibi bo'lgan fayllarni o'chirish imkonini beradi. Ushbu parametr ifodalanmasa, `rm` kataloglarni emas, balki faqat individual fayllarni o'chiradi.
        
   `-f` (force) optsiyasi:
        -f opsiyasi "majbur" ma'nosini bildiradi va agar `rm` kommandasi bilan birga qo'llanilganda, u ko'pgina ogohlantirish xabarlarni e'tibordan qoldiradi. Agar yozishdan himoyalangan yoki mavjud bo'lmagan fayllarni o'chirishga harakat qilsangiz, tasdiqlashni so'ramasdan davom ettirishga imkon beradi.

## Linuks - touch

Touch burug'i ko'pincha fayl yaratish uchun ishlatiladi. Lekin, uning asosiy maqsadi fayllarning oxirgi o'zgartirilgan sanasini (last-modified-date) yangilashdir.

```bash
$ ls -l grass
-rw-rw-r-- 1 khumoyun khumoyun 1044 Aug  6 22:45 grass
$ touch grass
$ ls -l grass
-rw-rw-r-- 1 khumoyun khumoyun 1044 Aug 12 05:16 grass
```

## Linuks - nano 

![nano meme](./images/nano-meme.png)

`nano` - bu terminaldagi kod muharriri. U turli kengaytmadagi fayllarni qo'llab quvvatlaydi: py, js, html, c, sh va h.k.

```bash
$ nano hello-world.py
```

 - `nano` dasturidan chiqish uchun: **CTRL + X** 
 - `nano` haqida ko'proq malumot olish uchun: `man nano`

Agar `nano` kompyuteringizda o'rnatilmagan bo'lsa:

```bash
sudo apt update 
sudo apt upgrade
sudo apt install nano
```

## Foydali

- **CTRL + SHIFT + T** (terminalda) -   terminalda yangi "tab" ochish
- **ALT + F4** - aktiv oynani yopish 
- **CTRL + TAB** (brovzerda) - tabni almashtirish
- **CTRL + Pg Up** (brovzer + terminal) - tablarni almashtirish chapga/o'ngga
- **ALT + 1..9** (brovzer + terminal) - tablarni indeks bo'ylab almashtirish

[< 01-kun](./01-kun.md) | [03-kun >](./03-kun.md)
