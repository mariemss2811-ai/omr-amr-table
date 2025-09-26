import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-gold" />,
      title: "العنوان",
      details: "شارع الملك فهد، الرياض، المملكة العربية السعودية"
    },
    {
      icon: <Phone className="w-6 h-6 text-gold" />,
      title: "الهاتف", 
      details: "+966 11 234 5678"
    },
    {
      icon: <Clock className="w-6 h-6 text-gold" />,
      title: "ساعات العمل",
      details: "يومياً: 11:00 ص - 12:00 ص"
    },
    {
      icon: <Instagram className="w-6 h-6 text-gold" />,
      title: "تابعونا",
      details: "@amreem_restaurant"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary-foreground mb-4">تواصل معنا</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            نسعد بخدمتكم ونتطلع لاستقبالكم في مطعم عمريم
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 shadow-soft">
              <CardContent className="p-6 text-center text-primary-foreground">
                <div className="mb-4 flex justify-center">{info.icon}</div>
                <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  {info.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold/90 text-warm-brown font-semibold px-12 py-4 text-lg shadow-gold transition-smooth"
          >
            احجز طاولة الآن
          </Button>
        </div>
      </div>
    </section>
  );
};