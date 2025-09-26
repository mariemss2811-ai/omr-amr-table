import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dish.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right">
            <h1 className="text-6xl lg:text-8xl font-bold text-primary-foreground mb-6 drop-shadow-lg">
              عمريم
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              تجربة طعام أصيلة تجمع بين النكهات التراثية والإبداع المعاصر
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-warm-brown font-semibold px-8 py-4 text-lg shadow-gold transition-smooth">
                تصفح القائمة
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg transition-smooth">
                احجز طاولة
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage} 
              alt="طبق تراثي شهي من مطعم عمريم"
              className="rounded-2xl shadow-warm w-full max-w-2xl mx-auto"
            />
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-gold rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};