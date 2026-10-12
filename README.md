# Bookmark Landing Page – Rozwiązanie zadania rekrutacyjnego

Nowoczesny, w pełni responsywny landing page Bookmark zbudowany zgodnie z wymaganiami zadania rekrutacyjnego przy użyciu preferowanego stosu technologicznego: **React**, **Webpack**, **Babel** oraz **Sass (SCSS)**.

---

## 🚀 Technologie

- **React 19** – modularna architektura komponentowa (Hooks, stan, efekty).
- **Webpack 5** – konfiguracja bundlera dla środowiska deweloperskiego i produkcyjnego.
- **Babel** – transpilacja kodu JavaScript / JSX (preset-env, preset-react).
- **Sass (SCSS)** – modularne arkusze stylów (BEM, zmienne, mixiny responsywne).
- **Semantyczny HTML5 & Dostępność (a11y)** – odpowiednie role ARIA, atrybuty `aria-expanded`, `aria-controls` oraz obsługa nawigacji klawiaturą.

---

## ✨ Zrealizowane funkcjonalności

1. **Pixel-perfect Design & Responsywność**:
   - Wierne odwzorowanie layoutu dla Desktop (1440px) i Mobile (375px) oraz płynne skalowanie dla tabletów.
   - Zaokrąglone kształty tła (*blue pill shapes*) w sekcji Hero oraz Features wykonane **czystym kodem CSS** (`border-radius`, pozycjonowanie absolutne).
   - Dynamiczna zmiana kolorów `fill` i `stroke` wektorów SVG w kluczowych punktach (ikony społecznościowe w stopce, strzałka w akordeonie FAQ, logo w nawigacji mobilnej i stopce).

2. **Interaktywne elementy**:
   - Wszystkie stany aktywne (`hover`, `focus`, `active`) na przyciskach, linkach i kartach.
   - Przełączane zakładki (Tabs) w sekcji **Features** z dynamiczną zmianą treści, ilustracji i wskaźnika.
   - Rozwijany akordeon **FAQ** z animacją wysokości i obracającą się czerwoną strzałką.
   - Pełnoekranowe menu nawigacyjne na urządzeniach mobilnych z animacją i blokowaniem przewijania strony.

3. **Walidacja Newslettera**:
   - Komunikaty o błędzie przy pustym polu lub niepoprawnym formacie e-mail (brak znaku `@` lub domeny).
   - Czerwona ramka, dedykowany komunikat o błędzie oraz ikona błędu SVG.
   - Komunikat sukcesu po poprawnym przesłaniu adresu.

4. **Extra funkcjonalności (Must-have z PDF)**:
   - **Modal (Pop-up)** z zawartością zakładki (*Tab 2 – Intelligent search*):
     - Automatyczne wywołanie po **najechaniu kursorem na górną krawędź strony** (exit-intent).
     - Automatyczne wywołanie po **30 sekundach** od wejścia na stronę.
     - Możliwość natychmiastowego wywołania przyciskiem *Login* lub *More Info*.
     - Dostępne zamykanie: krzyżyk, kliknięcie w tło (backdrop) lub klawisz `Escape`.
   - **Płynny licznik w sekcji Newslettera**:
     - Licznik `35,000+ already joined` płynnie **odlicza w dół od 35 000 do 0 w ciągu dokładnie 20 sekund** (`requestAnimationFrame`).

---

## 🛠️ Uruchomienie lokalne

### 1. Instalacja zależności
```bash
npm install
```

### 2. Uruchomienie serwera deweloperskiego
```bash
npm start
```
Aplikacja będzie dostępna pod adresem: `http://localhost:3000/`

### 3. Zbudowanie wersji produkcyjnej
```bash
npm run build
```
Zoptymalizowane pliki produkcyjne zostaną wygenerowane w folderze `/dist`.

---

## 📦 Przygotowanie do oddania na GitHub i Deploy

1. Zainicjalizuj repozytorium git:
   ```bash
   git init
   git add .
   git commit -m "feat: complete recruitment task landing page"
   ```
2. Utwórz branch ze swoim imieniem (zgodnie z wytycznymi w PDF):
   ```bash
   git checkout -b jakub
   ```
3. Wypchnij na GitHub i zdeployuj na Vercel, Netlify lub GitHub Pages:
   ```bash
   # Po połączeniu z repozytorium:
   git remote add origin <URL_DO_REPOZYTORIUM>
   git push -u origin jakub
   ```
