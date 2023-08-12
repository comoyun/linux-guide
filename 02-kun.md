### Tarmoq haqidagi ma'lumotlarni ko'rsatish

Siz o'zingizning ichki IP manzilingizni Windows'dagi ipconfig'ga o'xshab ko'rishingiz mumkin:

```
$ ifconfig 
```

Muayyan wlan adapteri haqida malumot olish:

```
$ ifconfig wlan0 
```

### Xost tirik yoki yo'qligini tekshirish

```
$ ping hostaddr
```

Agar u javob bersa, demak u tirik.

### IP manzillarni MAC manzillari bilan bog'lash

MAC manzillar arp keshda saqlangan bo'ladi, ko'rish uchun ushbu buyruqni kiriting:

```
$ arp -a
Internet Address       Physical Address       Type
192.168.1.1            00-11-22-33-44-55     dynamic
192.168.1.10           10-22-33-44-55-66     dynamic
192.168.1.20           20-33-44-55-66-77     dynamic
```

Kompyuterdagi ochiq portlar va ular bilan qanday dastur bog'langanligini bilish uchun `netstat` buyrug'ini kiriting.

```
$ netstat -tuln
```

- "**-t**" : TCP bog'lanishlarni ichiga oladi.
- "**-u**" : UDP bog'lanishlarni ichiga oladi.
- "**-l**" : ochiq portlarni ichiga oladi.
- "**-p**" : Xost nomlarini o'rniga raqamli manzillarni ko'rsatadi.

### Buyruqlar tarixini qanday olish mumkin?

