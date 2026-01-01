# 🧠 JavaScript Day 19 — Events (Amaliyot)

Bu darsda men JavaScript’da **Events (hodisalar)** bo‘yicha **amaliy mashqlar** bajardim.
Oldingi darslarda o‘rganilgan `addEventListener`, `click`, `input`, `submit` va DOM methodlarini real misollar orqali mustahkamlab oldim.

---

## 📚 O‘rganganlarim / What I practiced

* Hodisalarni real elementlarga bog‘lash
* Foydalanuvchi harakatiga qarab UI’ni o‘zgartirish
* DOM + Events birga ishlashi

---

## 🧪 Amaliy mashqlar / Practice Tasks

### 1️⃣ Button bosilganda matn o‘zgarishi

```
const btn = document.querySelector('#btn');
const text = document.querySelector('#text');

btn.addEventListener('click', () => {
  text.textContent = 'Button bosildi!';
  text.classList.toggle('active');
});
```

---

### 2️⃣ Input orqali real-time text chiqarish

```
const input = document.querySelector('#input');
const output = document.querySelector('#output');

input.addEventListener('input', (e) => {
  output.textContent = e.target.value;
});
```

---

### 3️⃣ Form submit qilish (preventDefault)

```
const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  result.textContent = 'Forma muvaffaqiyatli yuborildi!';
});
```

---

### 4️⃣ Bir nechta elementga event qo‘shish

```
const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('selected');
  });
});
```

---

## 💻 Kichik loyiha / Mini Project

**Counter App** — tugma bosilganda son oshib-kamayadi.

```
let count = 0;
const inc = document.querySelector('#inc');
const dec = document.querySelector('#dec');
const display = document.querySelector('#count');

inc.addEventListener('click', () => {
  count++;
  display.textContent = count;
});

dec.addEventListener('click', () => {
  count--;
  display.textContent = count;
});
```

---

## 🧩 Qisqacha xulosa / Summary

* Events — interaktivlikning asosi
* `addEventListener()` — eng to‘g‘ri usul
* `e.target` va `preventDefault()` muhim
* DOM + Events = Real web ilovalar

---

## 🎯 Maqsad / Goal

Ushbu amaliyotning maqsadi — JavaScript’da **hodisalar bilan ishonchli ishlash** va real loyiha logikasini tushunish.

---

## 💬 Muallif / Author

✍️ Shokhjahon Qalandarov
📅 Dars: 19-kun — Events (Amaliyot)
