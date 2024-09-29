import fighterIcon from "../assets/image/fighter.png";
import mageIcon from "../assets/image/mage.png";
import marksmanIcon from "../assets/image/marksman.png";
import tankIcon from "../assets/image/tank.png";
import junglerIcon from "../assets/image/jungler.png";
import supportIcon from "../assets/image/support.png";

function BasicGuide() {
    return (
            <section class="mobile-block container">
                <h2 class="slide"><a href="https://www.youtube.com/watch?v=A7esermvUTI&pp=ygUv0LPQsNC50LQg0LTQu9GPINC90L7QstC40YfQutC-0LIgbW9iaWxlIGxlZ2VuZHM%3D">Видео в котором рассматриваются базовые аспекты игры, а вообще я бы порекомендовал наконец начать использовать первый навык освоенный в школе и начать уже читать буквы в игре.</a></h2>
                    <div class="category-row">
                        <div class="category-item2">
                            <img class="category-item__img2" src={fighterIcon} alt="Бойцы" />
                            <div class="category-item__title"><a href="https://www.youtube.com/watch?v=HEzvUCWoJq4&pp=ygU00LPQsNC50LQg0L3QsCDQsdC-0LnRhtC-0LIg0LzQvtCx0LDQudC7INC70LXQs9C10L3QtA%3D%3D">Бойцы</a></div>
                            <p class="low_font">Бойцы — герои ближнего боя, задача которых не убить врага, а застать его врасплох. Обычно бойцы начинают драку, выводя из строя самых опасных врагов или героев класса поддержки. У них нет высокого урона, как у убийц, и нет высоких показателей брони и здоровья, как у танков.
                            </p>
                        </div>
                        <div class="category-item2">
                            <img class="category-item__img2" src={mageIcon} alt="Маги" />
                            <div class="category-item__title"><a href="https://www.youtube.com/watch?v=IxVS_xJnt4s&pp=ygUx0LPQsNC50LQg0L3QsCDQvNCw0LPQvtCy0LzQvtCx0LDQudC7INC70LXQs9C10L3QtA%3D%3D">Маги</a></div>
                            <p class="low_font">Маг - герой, ориентирующийся на использование навыков. Лишь небольшая часть магов способна наносить большой урон и с помощью базовых атак.
                            </p>
                        </div>
                        <div class="category-item2">
                            <img class="category-item__img2" src={marksmanIcon} alt="Стрелки" />
                            <div class="category-item__title"><a href="https://www.youtube.com/watch?v=eDPEhfedrCo&pp=ygU40LPQsNC50LQg0L3QsCDRgdGC0YDQtdC70LrQvtCyINC80L7QsdCw0LnQuyDQu9C10LPQtdC90LQ%3D">Стрелки</a></div>
                            <p class="low_font">Стрелок - герой, использующий в основном свои базовые атаки, как главное оружие. На ранней стадии игры их урон довольно мал, но возрастает в поздней игре. Стрелки имеют малое количество защиты, поэтому они являются лёгкой целью для магов и убийц.
                            </p>
                        </div>
                        <div class="category-item2">
                            <img class="category-item__img2" src={junglerIcon} alt="Лесники" />
                            <div class="category-item__title"><a href="https://www.youtube.com/watch?v=YfyxaNViKkY&pp=ygUu0LPQsNC50LQg0L3QsCDQu9C10YEg0LzQvtCx0LDQudC7INC70LXQs9C10L3QtA%3D%3D">Лесники</a></div>
                            <p class="low_font">Лесник - отвечает за фарм в лесу и помощь команде в выполнении различных задач. Лесник играет ключевую роль в распределении ресурсов и контроле карты. Лесник убивает лесных крипов, чтобы получить золото и опыт. Это позволяет ему быстро набирать уровни и получать преимущества по сравнению с другими игроками.
                            </p>
                        </div>
                    </div>
                        <p class="slide">Роуминг - (от английского "roam") означает перемещение по карте без постоянного нахождения на одной линии (лейне). Роуминг позволяет оказывать поддержку союзникам на всех линиях и влиять на ход игры в различных частях карты. Это важная стратегическая роль, которая помогает команде получать преимущество.
                        <br />
                        <br />
                        Роумеры - это  ↓ ↓ ↓ ↓
                        </p>
                            <div class="category-row">
                                <div class="category-item2">
                                    <img class="category-item__img2" src={supportIcon} alt="Поддержка" />
                                    <div class="category-item__title"><a href="https://www.youtube.com/watch?v=FgjsDXlmxJs&pp=ygUw0LPQsNC50LQg0L3QsCDRgNC-0YPQvCDQvNC-0LHQsNC50Lsg0LvQtdCz0LXQvdC0">Поддержка</a></div>
                                    <p class="low_font">Поддержка — это герой, основная задача которого заключается в помощи команде через защиту союзников, исцеление, наложение положительных эффектов (баффов) и контроль противников. Персонажи поддержки обычно не наносят много урона, но компенсируют это своими умениями, которые могут замедлять, оглушать или обездвиживать врагов, а также усиливать или исцелять союзников. Они играют важную роль в командных сражениях, обеспечивая выживаемость ключевых членов команды, таких как стрелки или маги, и помогая контролировать ход боя. Хороший персонаж поддержки делает команду более устойчивой и может менять исход сражений благодаря грамотному использованию своих навыков.
                                </p>
                                </div>
                                <div class="category-item2">
                                    <img class="category-item__img2" src={tankIcon} alt="Танки" />
                                    <div class="category-item__title"><a href="https://www.youtube.com/watch?v=FgjsDXlmxJs&pp=ygUw0LPQsNC50LQg0L3QsCDRgNC-0YPQvCDQvNC-0LHQsNC50Lsg0LvQtdCz0LXQvdC0">Танки</a></div>
                                    <p class="low_font">Танки - имеют наибольшую выживаемость среди всех героев в Mobile Legends. Эти герои принимают урон противника первыми и помогают в его убийстве. Чаще всего именно они инициируют сражение, выбирая подходящее время и ситуацию для атаки.
                                    </p>
                                </div>
                            </div>
            </section>
    );
}

export default BasicGuide;