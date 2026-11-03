import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen font-sans text-[#1a2a52]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
        <div className="text-2xl font-bold tracking-wide">BOXPACK</div>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#" className="hover:text-[#5a7bb5]">Услуги</a>
          <a href="#" className="hover:text-[#5a7bb5]">Как это работает</a>
          <a href="#" className="hover:text-[#5a7bb5]">Преимущества</a>
          <a href="#" className="hover:text-[#5a7bb5]">Контакты</a>
          <a href="#" className="rounded-full border border-[#1a2a52] px-5 py-2 hover:bg-[#1a2a52] hover:text-white">
            Связаться
          </a>
        </nav>
      </header>
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#5a7bb5]">
              Фулфилмент
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Фулфилмент, который держит сроки и репутацию
            </h1>
            <p className="mb-8 max-w-lg text-gray-600">
              Берём на себя приёмку, хранение, сборку и отправку заказов на маркетплейсы. Вы занимаетесь продажами — мы делаем всё остальное.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="rounded-lg bg-[#1a2a52] px-8 py-3 font-semibold text-white hover:bg-[#2a3f6e]">
                Оставить заявку
              </a>
              <a href="#" className="flex items-center gap-2 font-medium text-[#1a2a52] hover:underline">
                Узнать подробнее →
              </a>
            </div>
          </div>
          <div className="flex aspect-video w-full items-center justify-center rounded-2xl bg-gray-200 text-gray-400">
            Место под видео
          </div>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            { num: "500+", label: "клиентов уже с нами" },
            { num: "99,8%", label: "точность сборки заказов" },
            { num: "24/7", label: "поддержка и контроль" },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl bg-[#f0f4fa] p-8 text-center">
              <p className="text-3xl font-bold text-[#1a2a52]">{item.num}</p>
              <p className="mt-2 text-sm text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#f8fafc] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Как начать работать с нами
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Семь простых шагов от заявки до первых отправленных заказов
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { step: "ШАГ 1", title: "Оставляете заявку" },
              { step: "ШАГ 2", title: "Получаете расчёт" },
              { step: "ШАГ 3", title: "Заключаете договор" },
              { step: "ШАГ 4", title: "Привозите товар" },
              { step: "ШАГ 5", title: "Мы принимаем и размещаем" },
              { step: "ШАГ 6", title: "Собираем и упаковываем" },
              { step: "ШАГ 7", title: "Отправляем на маркетплейсы" },
            ].map((item, i) => (
              <div key={i} className="rounded-[10px] bg-white p-6 shadow-sm">
                <p className="text-xs font-bold text-[#5a7bb5]">{item.step}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              </div>
              ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Услуги фулфилмента
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Приёмка и хранение",
              "Сборка и упаковка",
              "Маркировка и стикеровка",
              "Отгрузка на маркетплейсы",
              "Обработка возвратов",
              "Фотофиксация и видеонаблюдение",
              "Личный кабинет и аналитика",
            ].map((service, i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-8 transition hover:shadow-md">
                <h3 className="text-lg font-semibold">{service}</h3>
                <p className="mt-3 text-sm text-gray-500">
                  Полный цикл работ с прозрачной отчётностью на каждом этапе.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1a2a52] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Почему выбирают BOXPACK
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Скорость", desc: "Отгрузка в день заказа" },
              { title: "Надёжность", desc: "SLA в договоре" },
              { title: "Прозрачность", desc: "Онлайн-отчёты 24/7" },
              { title: "Опыт", desc: "Более 500 клиентов" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-white/10 p-6 backdrop-blur">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}