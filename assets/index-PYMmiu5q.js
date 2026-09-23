(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const y=[{id:"apple",accent:"#FF9478",order:"01",name:"Яблочный уксус",flavour:"Яблочный",description:"Светлое, солнечное прочтение яблока — с чистым, округлым послевкусием.",benefits:"Временный текст. Здесь будут полезные свойства яблочного уксуса: что он даёт, в чём его особенность, чем отличается от остальных в коллекции. Заполним, когда будут согласованные формулировки.",usage:"Временный текст. Здесь будет способ применения: в каких блюдах уместен, сколько добавлять, с чем сочетается, чего избегать.",contents:"Временный текст. Здесь будет состав: сырьё, способ сбраживания, крепость, объём, срок и условия хранения.",volume:"500 мл",price:null,ingredients:["apple","leaf","orchard"]},{id:"date",accent:"#EBBE5C",order:"02",name:"Финиковый уксус",flavour:"Финиковый",description:"Тёмный, карамельный уксус со спокойным, обволакивающим характером.",benefits:"Временный текст. Здесь будут полезные свойства финикового уксуса.",usage:"Временный текст. Здесь будет способ применения финикового уксуса.",contents:"Временный текст. Здесь будет состав финикового уксуса.",volume:"500 мл",price:null,ingredients:["date","palm","earth"]},{id:"grape",accent:"#BE93DE",order:"03",name:"Виноградный уксус",flavour:"Виноградный",description:"Глубокий, фруктовый уксус с ярко-фиолетовой душой и деликатным финалом.",benefits:"Временный текст. Здесь будут полезные свойства виноградного уксуса.",usage:"Временный текст. Здесь будет способ применения виноградного уксуса.",contents:"Временный текст. Здесь будет состав виноградного уксуса.",volume:"500 мл",price:null,ingredients:["grape","vine","violet"]},{id:"pomegranate",accent:"#E88C97",order:"04",name:"Гранатовый уксус",flavour:"Гранатовый",description:"Финальная нота коллекции: насыщенная, драгоценного тона, с церемониальной теплотой.",benefits:"Временный текст. Здесь будут полезные свойства гранатового уксуса.",usage:"Временный текст. Здесь будет способ применения гранатового уксуса.",contents:"Временный текст. Здесь будет состав гранатового уксуса.",volume:"500 мл",price:null,ingredients:["pomegranate","seeds","garnet"]}],W=[{id:"instagram",label:"Instagram",href:""},{id:"telegram",label:"Telegram",href:""},{id:"whatsapp",label:"WhatsApp",href:""}],pe=[{number:"I",title:"Первый глоток",note:"Небольшой ритуал за столом.",image:"/hal-vinegar-preview/assets/apple-vinegar.jpg",position:"53% 42%"},{number:"II",title:"Собранный финик",note:"Тёмный фрукт и медленный ритм.",image:"/hal-vinegar-preview/assets/date-vinegar.jpg",position:"52% 67%"},{number:"III",title:"Фиолетовый сезон",note:"Этюд из фрукта и тени.",image:"/hal-vinegar-preview/assets/grape-vinegar.jpg",position:"50% 45%"},{number:"IV",title:"Раскрытый плод",note:"Яркая сердцевина под стеклом.",image:"/hal-vinegar-preview/assets/pomegranate-vinegar.jpg",position:"48% 44%"}],he={instagram:'<rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5"/><circle cx="12" cy="12" r="3.9"/><circle cx="17.1" cy="6.9" r="1.05" fill="currentColor" stroke="none"/>',telegram:'<path d="M21.6 3.6 2.9 10.5c-.6.2-.6 1 0 1.2l4.7 1.6 1.7 5.2c.2.5.8.6 1.1.2l2.5-2.5 4.4 3.2c.4.3 1 .1 1.1-.4l3.9-14.4c.2-.6-.4-1.1-.9-1z"/><path d="m7.6 13.3 10.6-7.4-7 8.1"/>',whatsapp:'<path d="M20.4 11.7a8.3 8.3 0 0 1-12.2 7.3l-4.7 1.5 1.5-4.6a8.3 8.3 0 1 1 15.4-4.2z"/><path d="M9.1 8.7c.4-.2.8 0 1 .4l.7 1.5c.1.3 0 .6-.2.8l-.5.4c.5 1 1.3 1.8 2.3 2.3l.4-.5c.2-.2.5-.3.8-.2l1.5.7c.4.2.6.6.4 1-.3.8-1.1 1.3-2 1.1-2.6-.6-4.7-2.7-5.3-5.3-.2-.8.2-1.6 1-2.2z"/>'},me=e=>`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25"
       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${he[e]}
  </svg>`,q=(e,t)=>`
  <header class="chapter-head">
    ${e?`<span class="chapter-no">${e}</span>`:""}
    <p class="eyebrow">${t}</p>
  </header>`,K=e=>{const t=`${me(e.id)}<span>${e.label}</span>`;return`<li>${e.href?`<a class="contact-link" href="${e.href}" target="_blank" rel="noopener noreferrer">${t}</a>`:`<span class="contact-link is-pending">${t}</span>`}</li>`},fe=new Set(["apple","date","grape","pomegranate"]),ge=e=>`
  <section class="section product" id="${e.id}" style="--accent:${e.accent}">
    <div class="bg" aria-hidden="true"></div>
    <div class="beam" aria-hidden="true"></div>
    <div class="glow" aria-hidden="true"></div>
    <div class="shaft" aria-hidden="true"></div>
    <div class="floor" aria-hidden="true"></div>
    <div class="haze" aria-hidden="true"></div>
    <div class="grain" aria-hidden="true"></div>
    <!-- Колонцифра главы: номер вкуса размером в треть кадра, еле
         различимый. Держит счёт четырёх частей коллекции и даёт плашке
         масштаб, которого не даёт ни одна строка текста. -->
    <span class="plate-no" aria-hidden="true">${e.order}</span>
    <div class="product-copy">
      <p class="eyebrow"><i class="tick" aria-hidden="true"></i>Натуральный уксус</p>
      <p class="kicker">Живой натюрморт</p>
      <h2 class="title">
        <span class="word">${e.flavour}</span>
        <span class="kind">уксус</span>
      </h2>
      <p class="lede">${e.description}</p>
      <!--
        Три раскрывающихся блока вместо трёх строк фактов.

        Взят <details>, а не самодельный аккордеон на кнопках: он умеет
        открываться и закрываться сам, доступен с клавиатуры, читается
        экранными дикторами и находится браузерным поиском по странице
        даже в свёрнутом виде. Своя реализация всё это пришлось бы
        воспроизводить руками и наверняка хуже.
      -->
      <div class="facts">
        <details class="fact" name="fact-${e.id}">
          <summary><span>Полезные свойства</span><i aria-hidden="true"></i></summary>
          <p>${e.benefits}</p>
        </details>
        <details class="fact" name="fact-${e.id}">
          <summary><span>Способ применения</span><i aria-hidden="true"></i></summary>
          <p>${e.usage}</p>
        </details>
        <details class="fact" name="fact-${e.id}">
          <summary><span>Состав</span><i aria-hidden="true"></i></summary>
          <p>${e.contents}</p>
        </details>
      </div>
      <p class="actions">
        <button class="add-to-order" data-product="${e.id}">Добавить в заказ</button>
        <span class="volume">${e.volume}</span>
      </p>
    </div>
    ${fe.has(e.id)?`
    <div class="bottle" style="--shot:url('/assets/${e.id}-flat.webp')">
      <span class="ground" aria-hidden="true"></span>
      <span class="contact" aria-hidden="true"></span>
      <span class="glass">
        <img src="/hal-vinegar-preview/assets/${e.id}-flat.webp" alt="Бутылка: ${e.name.toLowerCase()}">
      </span>
      <img class="reflect reflect-near" src="/hal-vinegar-preview/assets/${e.id}-flat.webp" alt="" aria-hidden="true">
      <img class="reflect reflect-far" src="/hal-vinegar-preview/assets/${e.id}-flat.webp" alt="" aria-hidden="true">
    </div>`:""}
  </section>`;function ye(){return`
  <header class="nav" id="top">
    <a class="nav-brand" href="#top">Хал</a>
    <p class="nav-note">Натуральный уксус · Коллекция 2026</p>
    <div class="nav-actions">
      <button class="cart-btn" type="button" aria-label="Перейти к набору">
        <span class="cart-btn-label">Набор</span>
        <span class="cart-count" aria-live="polite">0</span>
      </button>
      <button class="account-btn" type="button">Войти</button>
      <button class="menu-toggle" aria-expanded="false" aria-controls="menu-overlay" aria-label="Меню">Меню</button>
    </div>
  </header>

  <nav class="menu-overlay" id="menu-overlay" aria-hidden="true">
    <p class="eyebrow">Не спеша</p>
    <ul class="menu-links">
      <li><a href="#top"><span>01</span> Главная</a></li>
      <li><a href="#collection"><span>02</span> Коллекция</a></li>
      <li><a href="#apple"><span>03</span> Продукты</a></li>
      <li><a href="#set"><span>04</span> Набор</a></li>
      <li><a href="#order"><span>05</span> Заказ</a></li>
      <li><a href="#story"><span>06</span> История</a></li>
      <li><a href="#faq"><span>07</span> Информация</a></li>
    </ul>
  </nav>

  <section class="masthead">
    <p class="eyebrow">Четыре фруктовых уксуса</p>
    <h1>Фрукт не&nbsp;стоит на&nbsp;месте.</h1>
    <div class="masthead-foot">
      <p class="lede">Натуральный уксус в четырёх частях</p>
      <a class="add-to-order masthead-cta" href="#collection">Смотреть коллекцию</a>
    </div>
  </section>

  <section class="section hero">
    <div class="hero-scene" aria-hidden="true">
      <div class="hero-plate"></div>
      <div class="hero-heat"><i></i></div>
      <div class="hero-sun"></div>
      <div class="hero-dust"><i></i><i></i></div>
    </div>
    <ol class="hero-index">
      ${y.map(e=>`
      <li>
        <a href="#${e.id}">
          <span class="hero-index-no">${e.order}</span>
          <span class="hero-index-name">${e.flavour}</span>
        </a>
      </li>`).join("")}
    </ol>
  </section>

  <main>
    <section class="section" id="collection">
      ${q("01","Коллекция")}
      <h2>Четыре способа дать фрукту время.</h2>
      <p class="lede">Каждая бутылка начинается со своего фрукта и несёт собственный свет, глубину и характер за столом. Пройдите их не спеша.</p>
    </section>

    ${y.map(ge).join("")}

    <section class="section" id="set">
      ${q("02","Полная коллекция")}
      <h2>Одна коробка. Четыре источника.</h2>
      <p class="lede">Общий, церемониальный дом для всех вкусов коллекции. Полный набор можно собрать под себя.</p>
      <p><a href="#order">Собрать набор</a></p>
      <p class="note">Яблоко · Финик · Виноград · Гранат</p>
    </section>

    <section class="section order" id="order">
      ${q("03","Соберите свой")}
      <h2>Соберите свой набор.</h2>
      <p class="lede">Отметьте бутылки — они соберутся в витрину. Цены и оформление подключим, когда придут данные о товаре.</p>

      <div class="counter">
        <div class="shelf">
          <div class="shelf-wall" aria-hidden="true"></div>
          <div class="shelf-row" aria-hidden="true"></div>
          <p class="shelf-empty">Здесь появится то, что вы выберете.</p>
          
        </div>

        <ul class="picker">
          ${y.map(e=>`
          <li class="pick" style="--accent:${e.accent}">
            <span class="pick-text">
              <span class="pick-name">${e.flavour}</span>
              <small>${e.volume} · цена по запросу</small>
            </span>
            <span class="stepper" data-quantity="${e.id}">
              <button class="quantity-button" data-change="-1" aria-label="Убрать одну: ${e.name}">−</button>
              <output>0</output>
              <button class="quantity-button" data-change="1" aria-label="Добавить одну: ${e.name}">+</button>
            </span>
          </li>`).join("")}
        </ul>
      </div>

      <div class="tally">
        <p class="tally-count"><strong>0</strong><span>бутылок выбрано</span></p>
        <div class="summary-items" aria-live="polite"></div>
        <p class="tally-price"><span>Итого</span> <strong>Цена по запросу</strong></p>
        <p class="tally-actions">
          <button class="order-cta" type="button" disabled>Оформить заказ</button>
          <button class="copy-order" type="button" disabled>Скопировать</button>
        </p>
        <p class="note"><span class="copy-status" aria-live="polite"></span></p>
      </div>

      <dialog class="checkout">
        <form class="checkout-form">
          <p class="checkout-title">Оформление заказа</p>
          <div class="checkout-summary" aria-live="polite"></div>
          <button type="button" class="checkout-login" hidden>Войти по номеру — быстрее и с историей заказов</button>
          <div class="checkout-account" hidden>
            <span class="checkout-account-line"></span>
            <label class="checkout-otherphone">
              <input type="checkbox" name="other_phone"> Доставка на другой номер
            </label>
          </div>
          <label>Имя <input name="name" required autocomplete="name"></label>
          <label>Телефон <input name="phone" type="tel" required autocomplete="tel" placeholder="+7 ..."></label>
          <span class="carrier-label">Доставка</span>
          <div class="carrier-field">
            <button type="button" class="carrier-trigger" aria-haspopup="listbox" aria-expanded="false">
              <img src="/hal-vinegar-preview/assets/ozon-icon.webp" alt="" class="carrier-trigger-logo" hidden>
              <span class="carrier-trigger-text">Ozon — ПВЗ</span>
              <svg class="carrier-caret" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none"/>
              </svg>
            </button>
            <ul class="carrier-menu" role="listbox" hidden>
              <li role="option" data-value="ozon_pickup" data-label="Ozon — ПВЗ" aria-selected="true" class="is-ozon" data-logo="/hal-vinegar-preview/assets/ozon-icon.webp">
                <img src="/hal-vinegar-preview/assets/ozon-icon.webp" alt="" class="carrier-logo">Ozon — ПВЗ
                <span class="carrier-recommend">рекомендуем</span>
              </li>
              <li role="option" data-value="ozon_courier" data-label="Ozon — курьер" class="is-ozon" data-logo="/hal-vinegar-preview/assets/ozon-icon.webp">
                <img src="/hal-vinegar-preview/assets/ozon-icon.webp" alt="" class="carrier-logo">Ozon — курьер
              </li>
              <li role="option" data-value="cdek" data-label="СДЭК" class="is-cdek" data-logo="/hal-vinegar-preview/assets/cdek-icon.webp">
                <img src="/hal-vinegar-preview/assets/cdek-icon.webp" alt="" class="carrier-logo">СДЭК
              </li>
              <li role="option" data-value="pochta" data-label="Почта России" class="is-pochta" data-logo="/hal-vinegar-preview/assets/pochta-icon.webp">
                <img src="/hal-vinegar-preview/assets/pochta-icon.webp" alt="" class="carrier-logo">Почта России
              </li>
            </ul>
            <input type="hidden" name="carrier" value="ozon_pickup" required>
          </div>
          <label class="address-field">Адрес или пункт выдачи
            <textarea name="address" required rows="2" autocomplete="off"></textarea>
            <ul class="address-suggest" hidden></ul>
          </label>
          <input type="hidden" name="ozon_point_id">
          <label>Комментарий <input name="comment" autocomplete="off"></label>
          <p class="checkout-error" role="alert"></p>
          <div class="checkout-buttons">
            <button type="button" class="checkout-cancel">Отмена</button>
            <button type="submit" class="checkout-pay">Перейти к оплате</button>
          </div>
        </form>
      </dialog>

      <dialog class="auth">
        <form class="auth-form" novalidate>
          <button type="button" class="auth-close" aria-label="Закрыть">×</button>

          <div class="auth-step" data-step="phone">
            <p class="auth-title">Вход в кабинет</p>
            <p class="auth-lede">Введите номер телефона — пришлём код в SMS.</p>
            <label>Телефон
              <input name="phone" type="tel" inputmode="tel" autocomplete="tel"
                     placeholder="+7 900 000-00-00" required>
            </label>
            <p class="auth-error" role="alert"></p>
            <button type="submit" class="auth-primary">Продолжить</button>
          </div>

          <div class="auth-step" data-step="code" hidden>
            <p class="auth-title auth-title-code"></p>
            <p class="auth-lede auth-lede-code"></p>
            <label class="auth-name-field" hidden>Как вас зовут?
              <input name="name" autocomplete="name" placeholder="Имя">
            </label>
            <label>Код из SMS
              <input name="code" inputmode="numeric" autocomplete="one-time-code"
                     maxlength="4" placeholder="4 цифры" required>
            </label>
            <p class="auth-error" role="alert"></p>
            <button type="submit" class="auth-primary">Подтвердить</button>
            <button type="button" class="auth-resend" disabled>Отправить код ещё раз</button>
            <button type="button" class="auth-back">Изменить номер</button>
          </div>
        </form>
      </dialog>

      <dialog class="cabinet">
        <button type="button" class="cabinet-close" aria-label="Закрыть">×</button>
        <p class="cabinet-title">Личный кабинет</p>

        <form class="cabinet-profile">
          <p class="cabinet-phone"></p>
          <label>Имя <input name="name" autocomplete="name" placeholder="Имя"></label>
          <label>Адрес по умолчанию
            <textarea name="address" rows="2" placeholder="Город, улица, дом, ПВЗ"></textarea>
          </label>
          <div class="cabinet-profile-actions">
            <button type="submit" class="cabinet-save">Сохранить</button>
            <span class="cabinet-saved" aria-live="polite"></span>
          </div>
        </form>

        <p class="cabinet-subtitle">История заказов</p>
        <div class="cabinet-orders" aria-live="polite"></div>

        <button type="button" class="cabinet-logout">Выйти</button>
      </dialog>
    </section>

    <section class="section" id="story">
      ${q("04","В движении")}
      <h2>Как накрывается стол.</h2>
      <p class="lede">Четыре места под ролики, которые продолжат историю.</p>
      <ol class="reels">
        ${pe.map(e=>`<li><span class="reel-number">${e.number}</span><strong>${e.title}</strong><small>${e.note}</small></li>`).join("")}
      </ol>
    </section>

    <section class="section" id="social">
      ${q("","Оставайтесь рядом")}
      <ul class="contacts">
        ${W.map(K).join("")}
      </ul>
    </section>

    <section class="section" id="faq">
      ${q("05","Информация")}
      <h2>Вопросы по существу.</h2>
      <p class="lede">Практические детали будут здесь, не перебивая ритм коллекции.</p>
      <div class="faq-list">
        <details><summary>Что входит в каждый уксус?</summary><p>Состав появится вместе с утверждённой информацией о продукте.</p></details>
        <details><summary>Как пользоваться коллекцией?</summary><p>Способ применения указан у каждого продукта; подробности добавим здесь.</p></details>
        <details><summary>Куда вы доставляете?</summary><p>Регионы и условия доставки подключим, когда будут операционные детали.</p></details>
        <details><summary>Можно вернуть или обменять?</summary><p>
          Если пришёл брак или не то, что заказывали, — заменим или вернём деньги: напишите нам,
          укажите номер заказа.<br><br>
          Отдельно: по закону о дистанционной торговле вы вправе отказаться от заказа в течение
          7 дней после получения, если бутылка не вскрыта и сохранила товарный вид — тоже просто
          напишите нам.
        </p></details>
      </div>
    </section>
  </main>

  <svg class="filters" width="0" height="0" aria-hidden="true" focusable="false">
    <filter id="liquidWarp" x="-15%" y="-15%" width="130%" height="130%"
            color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.008 0.015"
                    numOctaves="2" seed="7" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="11"
                         xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </svg>

  <footer class="footer">
    <div class="footer-top">
      <div class="footer-brand">
        <a class="brand" href="#top">Хал</a>
        <p class="footer-tagline">Фрукт, время и неспешный стол.</p>
      </div>

      <nav class="footer-nav" aria-label="Разделы сайта">
        <p class="footer-heading">Разделы</p>
        <ul class="footer-links">
          <li><a href="#collection">Коллекция</a></li>
          <li><a href="#order">Заказ</a></li>
          <li><a href="#story">История</a></li>
          <li><a href="#faq">Информация</a></li>
        </ul>
      </nav>

      <div class="footer-contact">
        <p class="footer-heading">Связь</p>
        <ul class="contacts">
          ${W.map(K).join("")}
        </ul>
      </div>
    </div>

    <p class="footer-legal">© ${new Date().getFullYear()} Хал · Все права защищены</p>
  </footer>`}const be=document.querySelector("#app");be.innerHTML=ye();const D=document.querySelector(".menu-toggle"),ae=document.querySelector(".menu-overlay"),ne=e=>{D.setAttribute("aria-expanded",String(e)),ae.setAttribute("aria-hidden",String(!e)),document.body.classList.toggle("menu-open",e)};D.addEventListener("click",()=>ne(D.getAttribute("aria-expanded")!=="true"));ae.querySelectorAll("a").forEach(e=>e.addEventListener("click",()=>ne(!1)));const d=Object.fromEntries(y.map(e=>[e.id,0])),ve=document.querySelector(".summary-items"),Se=document.querySelector(".tally-count strong"),A=document.querySelector(".order-cta"),se=document.querySelector(".copy-order"),E=document.querySelector(".copy-status"),$=document.querySelector(".shelf"),j=document.querySelector(".shelf-row");function qe(e,t){const a=document.createElement("span");return a.className=`vial v-${e.id}`,a.dataset.flavour=e.id,a.style.setProperty("--shot",`url('/assets/${e.id}-plain.webp')`),a.style.setProperty("--accent",e.accent),a.style.setProperty("--ord",String(t)),a.innerHTML='<i class="vial-body"></i>',a}function ke(){y.forEach((e,t)=>{const a=[...j.children].filter(s=>s.dataset.flavour===e.id&&!s.classList.contains("is-leaving")),n=d[e.id];for(let s=a.length;s<n;s+=1)j.appendChild(qe(e,t));for(let s=a.length;s>n;s-=1){const o=a[s-1];o.classList.add("is-leaving"),o.addEventListener("animationend",()=>o.remove(),{once:!0}),setTimeout(()=>o.remove(),500)}})}function oe(){$.style.removeProperty("--h");const e=[...j.querySelectorAll(".vial")];if(!e.length)return;const t=getComputedStyle($),a=$.clientWidth-parseFloat(t.paddingLeft)-parseFloat(t.paddingRight),n=parseFloat(getComputedStyle(j).columnGap)||0,s=()=>e.reduce((c,b)=>c+b.getBoundingClientRect().width,0)+n*(e.length-1);let o=e[0].getBoundingClientRect().height;for(let c=0;c<4;c+=1){const b=s();if(b<=a||(o=Math.max(70,Math.floor(o*a/b)),$.style.setProperty("--h",`${o}px`),o===70))return}}const re=document.querySelector(".cart-btn"),C=document.querySelector(".cart-count");re.addEventListener("click",()=>{document.querySelector("#order").scrollIntoView({behavior:"smooth",block:"start"})});let Y;function we(e){const t=C.textContent!==String(e);C.textContent=e,re.classList.toggle("has-items",e>0),!(!t||e===0)&&(C.classList.add("is-bumped"),clearTimeout(Y),Y=setTimeout(()=>C.classList.remove("is-bumped"),280))}function P(){const e=Object.values(d).reduce((n,s)=>n+s,0);Se.textContent=e,we(e),document.querySelectorAll("[data-quantity]").forEach(n=>{const s=n.dataset.quantity;n.querySelector("output").textContent=d[s],n.closest(".pick").classList.toggle("is-chosen",d[s]>0)});const t=y.filter(n=>d[n.id]);ve.innerHTML=t.map(n=>`<p><span>${n.flavour}</span> <strong>× ${d[n.id]}</strong></p>`).join(""),$.classList.toggle("has-bottles",e>0),ke(),oe();const a=y.some(n=>x[n.id]);A.disabled=e===0||!a,A.textContent=a?"Оформить заказ":"Цены появятся скоро",se.disabled=e===0,typeof Q=="function"&&Q()}document.querySelectorAll(".quantity-button").forEach(e=>e.addEventListener("click",()=>{const a=e.closest("[data-quantity]").dataset.quantity;d[a]=Math.max(0,Math.min(12,d[a]+Number(e.dataset.change))),P()}));document.querySelectorAll(".add-to-order").forEach(e=>e.addEventListener("click",()=>{const t=e.dataset.product;d[t]=Math.min(12,d[t]+1),P(),document.querySelector("#order").scrollIntoView({behavior:"smooth",block:"start"})}));const S="",x={},I=document.querySelector(".checkout"),h=document.querySelector(".checkout-form"),ce=document.querySelector(".checkout-error"),$e=document.querySelector(".checkout-summary"),Z=document.querySelector(".tally-price strong");let O;const U=e=>(e/100).toLocaleString("ru-RU")+" ₽";fetch(S+"/api/products").then(e=>e.ok?e.json():[]).then(e=>{for(const t of e)x[t.id]=t.price;document.querySelectorAll(".pick").forEach(t=>{const a=t.querySelector("[data-quantity]")?.dataset.quantity,n=t.querySelector(".pick-text small"),s=y.find(o=>o.id===a);a&&x[a]!=null&&n&&s&&(n.textContent=`${s.volume} · ${U(x[a])}`)}),P()}).catch(()=>{});function le(){return y.reduce((e,t)=>e+(x[t.id]||0)*(d[t.id]||0),0)}function Q(){const e=le();Z&&(Z.textContent=e?U(e):"Цена по запросу")}let X=!1;function Ee(){if(X)return;X=!0;const e=document.createElement("link");e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Onest:wght@700;800&family=Roboto:wght@500;700&family=Golos+Text:wght@600;700&display=swap",document.head.appendChild(e)}A.addEventListener("click",()=>{const e=y.filter(t=>d[t.id]);e.length&&(Ee(),$e.innerHTML=e.map(t=>`<span>${t.flavour} × ${d[t.id]}</span>`).join("")+`<strong>${U(le())}</strong>`,ce.textContent="",Le(),I.showModal())});I.querySelector(".checkout-cancel").addEventListener("click",()=>I.close());h.addEventListener("submit",async e=>{e.preventDefault();const t=new FormData(h),a={carrier:t.get("carrier"),name:t.get("name"),phone:t.get("phone"),address:t.get("address"),comment:t.get("comment")||"",ozonPointId:t.get("ozon_point_id")||null,items:y.filter(s=>d[s.id]).map(s=>({id:s.id,qty:d[s.id]}))},n=h.querySelector(".checkout-pay");n.disabled=!0,n.textContent="Создаём заказ…";try{const s=await fetch(S+"/api/order",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a)}),o=await s.json();if(!s.ok||!o.payUrl)throw new Error(o.error||"Не удалось создать заказ");window.location.href=o.payUrl}catch(s){ce.textContent=s.message,n.disabled=!1,n.textContent="Перейти к оплате"}});{let e=function(){c.hidden=!0,n.setAttribute("aria-expanded","false")},t=function(){c.hidden=!1,n.setAttribute("aria-expanded","true")};const a=h.querySelector(".carrier-field"),n=a.querySelector(".carrier-trigger"),s=a.querySelector(".carrier-trigger-logo"),o=a.querySelector(".carrier-trigger-text"),c=a.querySelector(".carrier-menu"),b=a.querySelector("[name=carrier]"),w=[...c.querySelectorAll("[role=option]")],L=["is-ozon","is-cdek","is-pochta"];O=function(g,{silent:u=!1}={}){const l=w.find(f=>f.dataset.value===g);if(!l)return;b.value=g,o.textContent=l.dataset.label;const m=L.find(f=>l.classList.contains(f));n.classList.remove(...L),m&&n.classList.add(m),s.hidden=!l.dataset.logo,l.dataset.logo&&(s.src=l.dataset.logo),w.forEach(f=>f.setAttribute("aria-selected",String(f===l))),u||b.dispatchEvent(new Event("change"))},n.addEventListener("click",()=>c.hidden?t():e()),w.forEach(g=>{g.addEventListener("click",()=>{O(g.dataset.value),e()})}),document.addEventListener("click",g=>{a.contains(g.target)||e()}),document.addEventListener("keydown",g=>{g.key==="Escape"&&e()}),O(b.value,{silent:!0})}const xe="7ce6280f9dbac516cdcfaf194149a08a3f1cfdbf";{let e=function(){n.hidden=!0,n.innerHTML=""},t=function(u){if(!u.length)return e();n.innerHTML=u.map((l,m)=>`<li data-i="${m}" class="${l.value==null?"is-note":""}">${l.label}</li>`).join(""),n.hidden=!1,n.querySelectorAll("li").forEach(l=>{const m=u[Number(l.dataset.i)];m.value!=null&&l.addEventListener("mousedown",f=>{f.preventDefault(),a.value=m.value,o.value=m.id||"",e()})})};const a=h.querySelector("[name=address]"),n=h.querySelector(".address-suggest"),s=h.querySelector("[name=carrier]"),o=h.querySelector("[name=ozon_point_id]");let c=null,b=null;async function w(u,l){try{const m=await fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",{method:"POST",signal:l,headers:{"content-type":"application/json",accept:"application/json",authorization:"Token "+xe},body:JSON.stringify({query:u,count:6,locations:[{country:"Россия"}]})});return m.ok?(await m.json())?.suggestions||[]:[]}catch{return[]}}async function L(u,l,m){try{const f=await fetch(`${S}/api/ozon/pvz-near?lat=${u}&lon=${l}`,{signal:m});return f.ok?(await f.json()).points||[]:[]}catch{return[]}}async function g(u){c?.abort();const l=new AbortController;c=l;const m=await w(u,l.signal);if(l.signal.aborted)return;if(s.value!=="ozon_pickup"){t(m.map(v=>({label:v.value,value:v.value})));return}const f=m.find(v=>v.data?.geo_lat&&v.data?.geo_lon);if(!f){t([{label:"Уточните город и улицу, чтобы найти пункты Ozon рядом",value:null}]);return}const N=await L(f.data.geo_lat,f.data.geo_lon,l.signal);if(!l.signal.aborted){if(!N.length){t([{label:"Рядом нет пунктов выдачи Ozon — уточните адрес",value:null}]);return}t(N.map(v=>{const J=(v.name?v.name+", ":"")+v.address;return{label:J,value:J,id:v.id}}))}}a.addEventListener("input",()=>{o.value="",clearTimeout(b);const u=a.value.trim();if(u.length<3)return e();b=setTimeout(()=>g(u),300)}),a.addEventListener("blur",()=>setTimeout(e,150)),s.addEventListener("change",()=>{o.value="";const u=a.value.trim();u.length>=3&&!n.hidden&&g(u)})}{const e=new URLSearchParams(location.search).get("order");e==="success"?(E.textContent="Заказ оплачен. Мы свяжемся по доставке.",history.replaceState(null,"",location.pathname+"#order")):e==="pending"?(E.textContent="Платёж обрабатывается — подтверждение придёт в течение минуты.",history.replaceState(null,"",location.pathname+"#order")):e==="error"&&(E.textContent="Оплата не прошла. Попробуйте ещё раз.",history.replaceState(null,"",location.pathname+"#order"))}const F=document.querySelector(".account-btn"),_=document.querySelector(".auth"),i=_.querySelector(".auth-form"),p=document.querySelector(".cabinet"),z=h.querySelector(".checkout-login");let r=null,M=null,B=!1,R=null;function k(){F.textContent=r?"Профиль":"Войти",F.classList.toggle("is-in",!!r)}function H(){return[...i.querySelectorAll(".auth-step")].find(e=>!e.hidden)}function V(e){i.querySelectorAll(".auth-step").forEach(t=>{t.hidden=t.dataset.step!==e}),i.querySelectorAll(".auth-error").forEach(t=>{t.textContent=""})}function T(e){const t=H()?.querySelector(".auth-error");t&&(t.textContent=e)}function ie(e=60){const t=i.querySelector(".auth-resend");clearInterval(R);let a=e;const n=()=>{t.disabled=a>0,t.textContent=a>0?`Отправить код ещё раз (${a})`:"Отправить код ещё раз",a<=0&&clearInterval(R),a--};n(),R=setInterval(n,1e3)}async function de(e){const t=await fetch(S+"/api/auth/start",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({phone:e})}),a=await t.json();if(!t.ok)throw new Error(a.error||"Не получилось отправить код");return a}i.addEventListener("submit",async e=>{e.preventDefault();const t=H()?.dataset.step,a=H().querySelector(".auth-primary");a.disabled=!0;try{if(t==="phone"){const n=i.querySelector("[name=phone]").value.trim();if(!n){T("Введите номер телефона");return}const s=await de(n);M=n,i.querySelector(".auth-name-field").hidden=s.exists,i.querySelector(".auth-title-code").textContent=s.exists?"С возвращением":"Регистрация",i.querySelector(".auth-lede-code").textContent=`Код отправлен на ${s.phoneMasked}`,i.querySelector("[name=code]").value="",V("code"),ie(60),i.querySelector("[name=code]").focus()}else{const n=i.querySelector("[name=code]").value.trim(),s=i.querySelector("[name=name]").value.trim();if(n.length<4){T("Введите код из 4 цифр");return}const o=await fetch(S+"/api/auth/verify",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({phone:M,code:n,name:s})}),c=await o.json();if(!o.ok)throw new Error(c.error||"Не получилось войти");r=c.customer,k(),_.close(),B?(B=!1,A.click()):ue()}}catch(n){T(n.message)}finally{a.disabled=!1}});i.querySelector(".auth-resend").addEventListener("click",async()=>{if(M)try{await de(M),ie(60)}catch(e){T(e.message)}});i.querySelector(".auth-back").addEventListener("click",()=>{V("phone"),i.querySelector("[name=phone]").focus()});i.querySelector(".auth-close").addEventListener("click",()=>_.close());function G(){V("phone"),_.showModal(),i.querySelector("[name=phone]").focus()}F.addEventListener("click",()=>{r?ue():G()});function Le(){const e=h.querySelector(".checkout-account"),t=h.querySelector("[name=other_phone]"),a=h.querySelector("[name=phone]"),n=h.querySelector("[name=name]"),s=h.querySelector("[name=address]");z&&(z.hidden=!!r),r?(e.hidden=!1,h.querySelector(".checkout-account-line").textContent=`Аккаунт: ${r.phone}`,t.checked=!1,a.value=r.phone,a.readOnly=!0,r.name&&!n.value&&(n.value=r.name),r.address&&!s.value&&(s.value=r.address),r.carrier&&O(r.carrier,{silent:!0})):(e.hidden=!0,a.readOnly=!1)}h.querySelector("[name=other_phone]").addEventListener("change",e=>{const t=h.querySelector("[name=phone]");e.target.checked?(t.readOnly=!1,t.value="",t.focus()):r&&(t.value=r.phone,t.readOnly=!0)});z&&z.addEventListener("click",()=>{B=!0,I.close(),G()});async function ue(){p.showModal();const e=p.querySelector(".cabinet-orders");e.textContent="Загрузка…",p.querySelector(".cabinet-saved").textContent="",r&&(p.querySelector(".cabinet-phone").textContent=r.phone,p.querySelector("[name=name]").value=r.name||"",p.querySelector("[name=address]").value=r.address||"");try{const t=await fetch(S+"/api/me");if(!t.ok)throw new Error("нет сессии");const a=await t.json();r=a.customer,k(),p.querySelector(".cabinet-phone").textContent=r.phone,p.querySelector("[name=name]").value=r.name||"",p.querySelector("[name=address]").value=r.address||"",Ce(a.orders)}catch{r=null,k(),p.close(),G()}}function Ce(e){const t=p.querySelector(".cabinet-orders");if(!e||!e.length){t.innerHTML='<p class="cabinet-empty">Заказов пока нет.</p>';return}t.innerHTML=e.map(a=>{const n=a.items.map(c=>`${c.qty}× ${c.flavour}`).join(", "),s=new Date(a.createdAt.replace(" ","T")+"Z").toLocaleDateString("ru-RU"),o=a.trackingUrl?`<a href="${a.trackingUrl}" target="_blank" rel="noopener">трек ${a.tracking}</a>`:a.tracking?`трек ${a.tracking}`:"";return`<article class="cab-order">
      <header><b>Заказ #${a.id}</b><span>${s}</span></header>
      <p class="cab-order-items">${n}</p>
      <p class="cab-order-meta">
        <span class="cab-status cab-status--${a.status}">${a.statusRu}</span>
        <span>${a.carrier}</span>
        <span>${a.totalRub}</span>
        ${o?`<span>${o}</span>`:""}
      </p>
    </article>`}).join("")}p.querySelector(".cabinet-close").addEventListener("click",()=>p.close());p.querySelector(".cabinet-profile").addEventListener("submit",async e=>{e.preventDefault();const t=new FormData(e.target),a=p.querySelector(".cabinet-saved");a.textContent="Сохраняем…";try{const n=await fetch(S+"/api/me",{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({name:t.get("name"),address:t.get("address")})}),s=await n.json();if(!n.ok)throw new Error(s.error||"Не удалось сохранить");r=s.customer,k(),a.textContent="Сохранено"}catch(n){a.textContent=n.message}});p.querySelector(".cabinet-logout").addEventListener("click",async()=>{await fetch(S+"/api/auth/logout",{method:"POST"}).catch(()=>{}),r=null,k(),p.close()});fetch(S+"/api/me").then(e=>e.ok?e.json():null).then(e=>{e&&(r=e.customer,k())}).catch(()=>{});se.addEventListener("click",async()=>{const e=y.filter(n=>d[n.id]).map(n=>`${n.name} × ${d[n.id]}`);if(!e.length)return;const t=Object.values(d).reduce((n,s)=>n+s,0),a=`Хал — заказ
${e.join(`
`)}

Всего бутылок: ${t}
Цена: по запросу`;try{await navigator.clipboard.writeText(a),E.textContent="Заказ скопирован."}catch{E.textContent="Копирование недоступно — выделите текст в сводке."}});P();function ee(){const e=new Set,t=n=>{for(const s of n.matchAll(/url\(["']?([^"')]+)["']?\)/g))e.add(s[1])};for(const n of document.querySelectorAll(".bottle, .glass img, .product .bg, .hero-plate")){if(n.tagName==="IMG"){(n.currentSrc||n.src)&&e.add(n.currentSrc||n.src);continue}t(getComputedStyle(n).backgroundImage),t(getComputedStyle(n,"::before").backgroundImage);const s=n.style.getPropertyValue("--shot");s&&t(s)}const a=[...e];(function n(){const s=a.shift();if(!s)return;const o=new Image;o.decoding="async",o.src=s;const c=()=>requestAnimationFrame(n);o.decode?o.decode().then(c,c):o.onload=o.onerror=c})()}document.readyState==="complete"?ee():addEventListener("load",ee);if(!matchMedia("(prefers-reduced-motion: reduce)").matches){const e=document.querySelector(".hero-scene");if(e){const t=document.createElement("video");t.className="hero-video",t.autoplay=!0,t.muted=!0,t.loop=!0,t.playsInline=!0,t.preload="auto",t.poster="/hal-vinegar-preview/assets/hero-poster-v1.webp",t.setAttribute("aria-hidden","true");const a=document.createElement("source");a.src="/hal-vinegar-preview/assets/hero-loop-v4.mp4",a.type="video/mp4",t.appendChild(a),t.addEventListener("canplaythrough",()=>t.classList.add("is-ready"),{once:!0}),e.appendChild(t)}}{const e=matchMedia("(prefers-reduced-motion: reduce)").matches,t=[...document.querySelectorAll(".masthead > *, .chapter-head, .section > h2, .section > .lede, .section > p, .reels li, .contacts li, .faq-list details, .product-copy > *, .product .bottle, .counter, .tally")];for(const a of document.querySelectorAll(".reels, .contacts"))[...a.children].forEach((n,s)=>n.style.setProperty("--rv",String(s)));if(t.forEach(a=>a.classList.add("reveal")),e||!("IntersectionObserver"in window))t.forEach(a=>a.classList.add("is-in"));else{document.documentElement.classList.add("js-reveal");const a=new IntersectionObserver((n,s)=>{for(const o of n)o.isIntersecting&&(o.target.classList.add("is-in"),s.unobserve(o.target))},{rootMargin:"0px 0px -12% 0px",threshold:.01});t.forEach(n=>a.observe(n))}}let te;addEventListener("resize",()=>{clearTimeout(te),te=setTimeout(oe,140)});{const e="https://92a7d6dde892df1f3a0ace0664d008a2@o4512064527073280.ingest.de.sentry.io/4512064532906064";if(e.startsWith("https://")){const t=()=>{const a=document.createElement("script");a.src="https://browser.sentry-cdn.com/10.74.0/bundle.min.js",a.crossOrigin="anonymous",a.onload=()=>{try{window.Sentry.init({dsn:e,environment:"production",release:void 0,tracesSampleRate:0,ignoreErrors:[/ResizeObserver loop/,/Non-Error promise rejection/]})}catch{}},document.head.appendChild(a)};document.readyState==="complete"?setTimeout(t,800):addEventListener("load",()=>setTimeout(t,800))}}addEventListener("load",()=>{setTimeout(()=>{if(!getComputedStyle(document.documentElement).getPropertyValue("--paper").trim())try{navigator.sendBeacon("/api/clienterror",JSON.stringify({reason:"no-css",ua:navigator.userAgent,url:location.href}))}catch{}},800)});
