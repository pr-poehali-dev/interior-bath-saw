import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const services = [
    {
      icon: "Droplets",
      title: "Отделка парных",
      description: "Профессиональная отделка парных комнат натуральными материалами с соблюдением всех технологий"
    },
    {
      icon: "Thermometer",
      title: "Монтаж печей",
      description: "Установка и обслуживание банных печей любой сложности с гарантией качества"
    },
    {
      icon: "TreePine",
      title: "Деревянная отделка",
      description: "Работа с премиальными породами дерева: липа, кедр, абаш, термоосина"
    },
    {
      icon: "Sparkles",
      title: "Дизайн-проекты",
      description: "Создание уникальных дизайн-проектов бань и саун под ключ"
    },
    {
      icon: "Waves",
      title: "Гидроизоляция",
      description: "Качественная гидро- и пароизоляция с использованием современных материалов"
    },
    {
      icon: "Lightbulb",
      title: "Освещение",
      description: "Проектирование и монтаж специального освещения для бань и саун"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/00a14e30-b787-4a82-8d1b-8cd171409f4f/files/5a00dcf7-d33e-4352-8172-922dd203b8cf.jpg",
      title: "Премиум сауна",
      description: "Отделка премиальной сауны кедром с LED-освещением"
    },
    {
      image: "https://cdn.poehali.dev/projects/00a14e30-b787-4a82-8d1b-8cd171409f4f/files/103810ee-766f-4522-bf50-c6dbcb91be0e.jpg",
      title: "Русская баня",
      description: "Классическая русская баня с отделкой липой"
    },
    {
      image: "https://cdn.poehali.dev/projects/00a14e30-b787-4a82-8d1b-8cd171409f4f/files/297d73dd-a662-44a6-ab04-1f2dd093bf39.jpg",
      title: "Финская сауна",
      description: "Современная финская сауна с панорамным остеклением"
    }
  ];

  const reviews = [
    {
      name: "Дмитрий Ковалёв",
      rating: 5,
      text: "Отличная работа! Сделали баню за 2 недели, качество на высоте. Особенно порадовала отделка парной - дышится легко, запах натурального дерева."
    },
    {
      name: "Елена Смирнова",
      rating: 5,
      text: "Заказывали полную отделку сауны. Ребята профессионалы своего дела! Всё сделали точно в срок, помогли с выбором материалов."
    },
    {
      name: "Александр Петров",
      rating: 5,
      text: "Уже третий год пользуемся баней - никаких нареканий. Отделка держится отлично, печь работает как часы. Рекомендую!"
    }
  ];

  const prices = [
    { service: "Отделка парной (за м²)", price: "от 3 500 ₽" },
    { service: "Монтаж печи", price: "от 15 000 ₽" },
    { service: "Полная отделка бани под ключ", price: "от 250 000 ₽" },
    { service: "Дизайн-проект", price: "от 20 000 ₽" }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Droplets" className="text-primary" size={32} />
            <span className="text-2xl font-bold">БаняМастер</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <Button asChild>
              <a href="#contacts">Связаться</a>
            </Button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 animate-fade-in"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-scale-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Профессиональная отделка бань и саун
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Создаём идеальное пространство для отдыха с 2010 года. Более 500 реализованных проектов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <a href="#contacts">Бесплатная консультация</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <a href="#portfolio">Наши работы</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр работ по внутренней отделке бань и саун
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Портфолио работ</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Примеры наших реализованных проектов
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят о нас наши клиенты
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Цены</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Прозрачное ценообразование без скрытых платежей
          </p>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              {prices.map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center p-6 border-b last:border-b-0 hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold">{item.service}</span>
                  <span className="text-xl font-bold text-primary">{item.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <p className="text-center text-muted-foreground mt-6">
            * Точная стоимость рассчитывается после замера объекта
          </p>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свяжитесь с нами удобным способом
          </p>
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                  />
                </div>
                <Button className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-primary" />
                  <span className="text-lg">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-primary" />
                  <span className="text-lg">info@banyamaster.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-primary" />
                  <span className="text-lg">Москва, ул. Строителей, 15</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Droplets" size={32} />
            <span className="text-2xl font-bold">БаняМастер</span>
          </div>
          <p className="text-secondary-foreground/80 mb-4">
            Профессиональная отделка бань и саун с 2010 года
          </p>
          <p className="text-sm text-secondary-foreground/60">
            © 2024 БаняМастер. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
