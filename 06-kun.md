## Paket-Menejeri buyruqlari

Paket menejeri (package-manager) internetdan turli dasturlarni o'rnatish, kompyuterdagi mavjud dasturlarni o'chirish/yangilash kabi xizmatlarni taqdim etadi. Paket menejeri barcha Linuks distributlarida xar hil bo'lishi mumkin. Ubuntu va Debian'ga asoslangan distributlarda `apt`, Arch'ga asoslangan distributlarda `pacman` kommandasi ishlatiladi. Quyida `apt` yordamida turli-xil buyruqlarni ko'rib chiqamiz.

### 1. Kompyuterdagi barcha ilovalarni yangilash

Tizim optimal ishlashi uchun mavjud dasturlarni kun-ora yangilab turish kifoya. Buyruq:

```bash
$ sudo apt update $$ sudo apt upgrade
```

Bir-biriga qarama-qarshi bo'lgan dasturlarni eng yangi versiyaga yangilashga va eski foydalanilmagan (bog'liqlik mavjud bo'lmagan) dasturlarni olib tashlaydigan buyruq:

```bash
$ sudo apt-get dist-upgrade
```

### 2. Ilovalarni APT bilan o'rnatish

```bash
$ sudo apt install dastur-nomi -y
```

`-y` (yes) optsiyasi dastur o'rnatilayotgan paytda beriladigan savollarga "ha" deb javob beradi, huddi Windows'da ilova o'rnatayotganda "next, next, next" qilganimizdek. Masalan, VLC Media Player-ni Ubuntu-ga o'rnatish uchun quyidagini bajaring:

```bash
$ sudo apt install vlc
```

### 3. Ilovalarni APT yordamida o'chirib tashlash

```bash
$ sudo apt remove dastur-nomi
```

Masalan, avval o'rnatgan VLC-ni o'chirish uchun:

```bash
$ sudo apt remove vlc
```
### 4. O'rnatish mumkin bo'lgan ilovalarni qidirish

```bash
$ sudo apt search dastur-nomi
```

## Qanday qilib ma'lum bir port bilan bog'langan dasturni topish mumkin? 

Buning uchun `lsof` (list-open-files) buyrug'idan foydalanamiz. Mana bir misol:

```bash
$ sudo lsof -i:port_raqami
```

Misol uchun, agar 80-port (veb-server) bilan bog'langan dasturni topmoqchi bo'lsangiz, quyidagi kommandani terminalga uloqtirasiz:

```bash
$ sudo lsof -i:80
```

>Ko'pchilik `netstat -tulpn | grep :port_raqami` buyruqdan foydalanadi, lekin bu ayrim dasturlar uchun samarasiz.

