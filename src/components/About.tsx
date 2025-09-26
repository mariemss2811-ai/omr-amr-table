import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Award, Heart } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-gold" />,
      title: "ساعات العمل",
      description: "مفتوح يومياً من 11 صباحاً حتى 12 منتصف الليل"
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "للعائلات",
      description: "مكان مثالي للعائلات مع قسم خاص ومريح"
    },
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: "جودة عالية",
      description: "أجود المكونات الطازجة والطهي على الطريقة التراثية"
    },
    {
      icon: <Heart className="w-8 h-8 text-gold" />,
      title: "خدمة مميزة",
      description: "فريق عمل محترف يحرص على راحتكم ورضاكم"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-right">
            <h2 className="text-5xl font-bold text-primary mb-6">عن مطعم عمريم</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              يُعتبر مطعم عمريم وجهة مميزة لمحبي الطعام الشرقي الأصيل، حيث نقدم تجربة طعام استثنائية 
              تجمع بين النكهات التراثية العريقة والجودة العالية في الخدمة. نفخر بتقديم أطباق محضرة 
              بعناية فائقة من أجود المكونات الطازجة.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              منذ تأسيسنا، نسعى لأن نكون المكان المفضل للعائلات والأصدقاء للاستمتاع بوجبة شهية 
              في أجواء دافئة ومريحة تعكس كرم الضيافة العربية الأصيلة.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center shadow-soft hover:shadow-warm transition-smooth border-0 bg-gradient-warm">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};