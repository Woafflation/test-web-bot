import React, { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import styles from "./App.module.css";

function Profile() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className={styles.wrapper}>
      <img
        src="https://artpostergallery.ru/userdata/image/thumbs/12/76/1276d540c94d37c5d0d95df24513d30f_2.jpg"
        alt=""
        className={styles.bgImg}
      />
      <main className={styles.content}>
        <div className={styles.info}>
          <div className={styles.name}>Alison Danis</div>
          <div className={styles.nick}>@alison_danis</div>
        </div>
        <div className={styles.social}>
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEWFhYX///+Hh4d/f3+CgoLIyMh8fHzb29vV1dWWlpby8vL6+vri4uLLy8uLi4vGxsaZmZm/v7+kpKT09PSwsLDo6Oi3t7eQkJCmpqaenp7s7Oytra3R0dHmB6IrAAAKDklEQVR4nO3d6barqhIGUAxIYpNE02ia9f7PeUmviQ1Q9Yn7jFs/zxkrOzMgIBQgInRkab6Kq8OuSDbiFZuk2B2qeJWnGfzfF8DPTvO4OtdSaymVUqId5r/I2/+qz1Wcp8BvARJm+fZUCy1/YL9hpFrUp20OKk6EMC8TIW1wLaYUSZkDvg23MF3vpCk6B1yDaf5yt+ausazCY1lIT91HKYvyyPml+IT7LZn3RibbPdv34hIuz751sxupz0umb8YiTMuN5uM9kXpTsjySDML8pCQz7xFSnRgaV7JwmTDWzu9QMiFXVqLwr2avnl9GXf8FFK7QvqdxFUgIrZ8tI6muegsvuwnK723Uu8vEwqya0PcwVp4jcz/haoPpH4ZCbvweRx/hfje9727c+YzlPITxxBX0E0rHEwgvZx3Idwt9dm5xXIVrEaoAH6HEGirMriEL8BH66taoOgnzAE3ob8iN03jcRbieaAwzFkq61FQH4SF8DX2FPgCEWTKHGvoKmVg/jLbCY+A29DuUsJ2ushQunWY/pwilLN837ITrOdXQV1i2N1bCcj5tTDN0ySWs5gk0xIpHeJhjFX2EtOg1xoWn+QIN8UQXzhpoQxwTzriKPmK0oo4Iq7kDDXGkuRkWzrSbaMdIpzEoXP8LQEMc7PqHhMv5V9FHyKEB3IDwOLehaH+ogWF4vzCb2dvEUCjR/zLVL0z+HaAhJu7C2XeE7ejvFvuEEzWjtzyae8bUJ6R8/ie3T+ptUHuE+QQlaDCiPpWr/NJ4iLL95bhcbatrkWyUdsk7kj0zcN3CbAN/CKWuq+VgKkKWHv/Ka2E7g6k23a1Nt/AKLkKlN1vrRIs/yy8jr/ZC8EOo3HIsVrY/d/ej2CW8YH3y4JYnYy0UomvZpkt4Rj6E+uS6emQvVGc7YQyso0q45xw4lGHX+uKvcA8EypPHYryDUOjfVeJf4Q5XR32WcN2EajcudPk8t1CDLzk8QiF/0hm+hdlm/FM8gQvPxFi33/yn3/8WwiZm1MI358dN+DNt8yW8wJqZvmEjt1Dor1/ySwhrZrR/9p2j8LuxaQuXqCKUVosoLEKh2w1aW4h6r+8cbKCEX+/7gvJZ1iEpGdvO36rdY7SENagI/Xp6b6Gq+4R/oKdwYJoIIhS6mTjdFKI6e8+xjL+wVYgNIaohJTUzXsJWc9oQohpSYhH6CJvPxUeIml4jPoV+LXxjBPURnlBFSNwv4SVUn6XhtzCFjdeIQL9eWr174LewRFXS8VwChPAzTHwLUV2FJm9c8htpbb6FsDG3Im9g9hO+f9mXEDWDSK+knsJ3L/wUwibYpPOQNNvv92kj9p5pg69pt6dwi3qr0E6TM8fttajFQupmeH41uW0JC1RfsbDf5pKVteMu/sFQRVN4hM0/FdbALedW6VvIY0OI6gyF6l7x+o09fxr5s0t8CGGV9PUwjAIBS7LP+nMXprB5bsv3imyB+Ikfcyd3IS6N23KWFFOHHongdyFuMUZZTXSDfuHHzOldCFy1txmzwdZK5EuYA1cMbYSoGTCh86cQ1leYDt+mkuJa8vIpBGawWQlhVeg+gSJuSYi4sBHCXtzE/SER2AyvzTgQ+ZDcOisBfK8QdmWImgITjyGVgP4LVkJYQ/N4/xa49ZhbhBbWN2EK+3xhJ6yRXyA1QmR/byVcAP990+eLKEZmWoYWytgIK2SeXmihqowQmokYXHg2QuiDHloo6khk0ITn4EKZiRSa8RxcqFMB7SxmIMwFLtvyFsGFciWg3eEMhLGAdofhhaoSh/+48CCAad1iDsKdKJCfH15ofAn088MLEwHLXL9HeCHWNwchOv4v/DeEz527naEshEN/L3kOQScCD/FAWAiH/jyO18CpOMugpo+OBXZIMgNhBp2DmINwH/7kA7CQ/oZO7vPBQtu96v0+8rgULKSuvSX0dwuwkLoyVtDfD8FCYlNq3g/J7/hgIbGhMe/45HkarJC6qVVV9Lk2rJB6GpeM6fOlWCG1AOSKPueNFV6JD5HO6esWWCE1m0mn9LUnrJD45W5rT+T1Q6iQvBurZlgDhgqp+Vr3NWBqhwgVUlv6+zo+uT1GCsk/f8yQTwMVUkfN93waak4UVEhOfU0Z8tqQwj1xLvWR10Z9A0MKyePuE0d+KVJIHndvOXKEkUJqcu8zR5iY540UUsfdzzxvYoOFFBJn9F+5+sTpLKCQupnmvd+C1ucjhcSm9L1nhrbvCSgkD7eiiGPvGlBI3NPW2LtG+iT/g9hGgzjf3dh/SNtD2t5b3g5p4ej/e+qLxWcPKXCzuoUQtY7f3AeM23oUUtjayw3bjx+0DC8NIayaBhS+Tm8Cn4sRUPh1LgbqbJOAwq+zTVD7SsIJv8+nQW1VDSf8OWMIdE5UOOHPOVGgLjGYsOOsL8x5bcGEHee1YbYDhxJ2nbmH2bQeSth5biLkaIVAwu6zLyEdRiBhz/mliG3rYYR9Z9AiTlEJI+w9RxhQiEGE/WdBAy7LCyJsz421z2Rnf00MIfw6BQ98rn4I4eC5+uyJ8QGEw3cjRBfmJzGAUA7fb8F9R8n0wrE7SrjPTpteOHrPDPMNEJMLx+8KYm5sphba3PfEO+02tdDqzi7We9cmFtrdu8Y6szit0PbuPM77DycuQ9v7DxnvsJxUaH+HJeM9pFMKXe4h5btLdkKh212ybBNvEwrd7gNmexSnE7re6cx1L/dkQvd7uZmmT6cS+tytHmWCgTiRUA2cyNwvjI7/kHDgjokBIcfU2zTCwcSzISFDgzqJsLcZHRdGJZU4hVAP3485LCRP20wg/JmYcRNSiXjhGHBUGJ1IRLhQjt62NCqkEdHCcaCFkFRRwcLRKmonjCr/FhUr1BZAKyGh04AKR7oJF6F/IjhSKAc7ekdhtPS8SwsnVMpyj4ClMDr6vWnAhErYXuhmK4wyr0u1UEKZWF+raC00b/0e7Q1IqHvf6ElC094411SIUFm2Me7CKN+41lSEUG6c7lR0EkbZ1bGmAoT66nazqZvQ1FS3NpVdqIRLDfURRunZpRi5hfqcjn8gUXhbX7QvRl6h6lofHAsPYbTfWTc4rEK5s7/U9BM+wiha2TaqjEK5+UlCsAo/YZRVdn0jm1DJyvNyaE+haXF2No8jk1DpnXML8wpvoXnfKMbLkUWoZEHYa0wQGmMyVo4MQqUT0l5qkjCK/uphI1modP03/hFDQRTeynGorhKFStLK7xZkoRmPn1Rv30ESSnVi2AnPIDTtarnoqaz+QqUXpXf72QwWoYnlufPicE+hkvrMdVQDl9CM5baJ+kH6CM2nJFuf8Vl38AlNXLbF1zn4zkIlZbG1ugjaNliFJtL1Tjbqq5PQ1E25W7M8fI3gFt4iLwthylI5CJUpO1GUiENEEEITWR6faqEtb3/Qoj7FuefIeixAwnukeWyzdFLFOXfNbAZSOI/4H1SNiS4r/34WAAAAAElFTkSuQmCC"
            alt=""
          />
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.count}>30</div>
            <div className={styles.statName}>followers</div>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <div className={styles.count}>61</div>
            <div className={styles.statName}>following</div>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <div className={styles.count}>12</div>
            <div className={styles.statName}>posts</div>
          </div>
          <div className={styles.divider} />
          <div className={styles.else}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
