<template>
  <footer>
    <div class="container footer--flex">
      <a href="#" class="footer--logo">
        <base-icon name="logo" />
      </a>

      <div class="footer--inside__flex">
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contac</a></li>
          <li><a href="#">Term & Cconditions</a></li>
        </ul>
        <ul>
          <li>
            <a href="#"
              ><base-icon name="facebook_icon" /> <span>FaceBook</span></a
            >
          </li>
          <li>
            <a href="#"
              ><base-icon name="twitter_icon" /> <span>Twitter</span></a
            >
          </li>
          <li>
            <a href="#"
              ><base-icon name="instagramm_icon" /> <span>Instagramm</span></a
            >
          </li>
        </ul>
        <ul class="last">
          <li><a href="#">Subscribe to uor newsletter</a></li>
          <li>
            <div class="input--wrapp">
              <input
                type="email"
                placeholder="Email"
                id="user--email"
                autocomplete="off"
              />
              <button>OK</button>
            </div>
          </li>
        </ul>
      </div>
      <ul class="address--list">
        <li><a href="#">497 Evengreen RD.Rosellive , CA 95673</a></li>
        <li><a href="tel:+44345678903">+44 345 678 903</a></li>
        <li><a href="mailto:adobexd@mail.com">adobexd@mail.com</a></li>
      </ul>
    </div>
  </footer>
</template>
<script setup>
import BaseIcon from "../basic-icon/BaseIcon.vue";
</script>
<style scoped>
footer {
  background: #f5f5f5;
  padding: 6.2rem 0;
  width: 100%;
  overflow: hidden;
}

.footer--flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

.footer--inside__flex {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-basis: 45%;
}
.footer--inside__flex ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
}
.footer--inside__flex ul li {
  font-size: 1.4rem;
  font-weight: 500;
}

.footer--inside__flex ul li a {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  transition: color 0.3s linear;
}
.footer--inside__flex ul li:hover a {
  color: var(--main-color);
}
.footer--inside__flex ul li:hover a span {
  color: var(--main-color);
}
.input--wrapp {
  border: 1px solid var(--main-color);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.input--wrapp input::placeholder {
  font-size: 1.3rem;
}
.input--wrapp input {
  padding: 0.8rem 0 0.8rem 2rem;
  border: none;
  outline: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.input--wrapp button {
  width: 45px;
  border: none;
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffff;
  background: var(--main-color);
  height: 100%;
  padding: 0.8rem 0;
  cursor: pointer;
}

.address--list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.address--list li {
  font-size: 1.4rem;
  font-weight: 500;
}
.address--list li a {
  transition: color 0.3s linear;
}
.address--list li:hover a {
  color: var(--main-color);
}

@media screen and (min-width: 370px) and (max-width: 699.9px) {
  footer {
    padding: 4rem 0;
    overflow: hidden;
  }
  .footer--flex {
    flex-direction: column;

    gap: 1rem;
  }
  .footer--inside__flex {
    flex-direction: column;
    gap: 2rem;
  }
  .footer--inside__flex ul {
    align-items: center;
  }
  .footer--inside__flex .last {
    display: none;
  }
  .footer--inside__flex ul li {
    font-size: 1.8rem;
  }
  .address--list {
    align-items: center;
  }
  .address--list li {
    font-size: 1.8rem;
  }
}
@media screen and (min-width: 700px) and (max-width: 991.9px) {
  .container {
    padding: 0 10px;
  }
  .footer--flex {
    justify-content: space-around;
  }
  .footer--inside__flex {
    gap: 1rem;
    justify-content: space-around;
    flex-basis: 45%;
  }

  .last {
    display: none !important;
  }
  .footer--inside__flex ul {
    gap: 1rem;
  }
  .footer--inside__flex ul li a {
    gap: 0.5rem;
  }
  .footer--inside__flex ul li {
    font-size: 1.5rem;
  }
  .address--list li {
    font-size: 1.5rem;
  }
}
@media screen and (min-width: 992px) and (max-width: 1199.9px) {
  .footer--inside__flex {
    flex-basis: 50%;
  }
  .container {
    padding: 0 10px;
  }
}
</style>
