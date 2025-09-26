import { Card, CardContent } from "@/components/ui/card";
import appetizersImage from "@/assets/appetizers.jpg";
import mainCourseImage from "@/assets/main-course.jpg";
import dessertsImage from "@/assets/desserts.jpg";

const menuCategories = [
  {
    title: "المقبلات",
    description: "تشكيلة متنوعة من المقبلات الشرقية الأصيلة",
    image: appetizersImage,
    items: [
      { name: "حمص بلحمة", price: "25 ريال" },
      { name: "متبل باذنجان", price: "20 ريال" },
      { name: "تبولة", price: "18 ريال" },
      { name: "فتوش", price: "22 ريال" },
    ]
  },
  {
    title: "الأطباق الرئيسية",
    description: "أطباق شهية محضرة بأجود المكونات",
    image: mainCourseImage,
    items: [
      { name: "منسف أردني", price: "65 ريال" },
      { name: "كبسة لحم", price: "55 ريال" },
      { name: "مشاوي مشكلة", price: "85 ريال" },
      { name: "صيادية سمك", price: "70 ريال" },
    ]
  },
  {
    title: "الحلويات",
    description: "حلويات شرقية طازجة ولذيذة",
    image: dessertsImage,
    items: [
      { name: "كنافة نابلسية", price: "30 ريال" },
      { name: "بقلاوة", price: "25 ريال" },
      { name: "مهلبية", price: "20 ريال" },
      { name: "أم علي", price: "22 ريال" },
    ]
  }
];

export const Menu = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-4">قائمة الطعام</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف تشكيلة واسعة من الأطباق الشرقية الأصيلة المحضرة بعناية فائقة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden shadow-soft hover:shadow-warm transition-smooth border-0 bg-card/50 backdrop-blur-sm">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-smooth hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 right-4 text-2xl font-bold text-primary-foreground">
                  {category.title}
                </h3>
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 text-right">
                  {category.description}
                </p>
                
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center border-b border-border/50 pb-2">
                      <span className="font-semibold text-gold">{item.price}</span>
                      <span className="text-foreground">{item.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};