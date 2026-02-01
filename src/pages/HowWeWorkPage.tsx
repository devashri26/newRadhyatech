import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Search, Compass, Rocket, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowWeWorkPage = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Search,
      number: "01",
      title: t("howWeWork.step1"),
      desc: t("howWeWork.step1Desc"),
    },
    {
      icon: Compass,
      number: "02",
      title: t("howWeWork.step2"),
      desc: t("howWeWork.step2Desc"),
    },
    {
      icon: Rocket,
      number: "03",
      title: t("howWeWork.step3"),
      desc: t("howWeWork.step3Desc"),
    },
    {
      icon: TrendingUp,
      number: "04",
      title: t("howWeWork.step4"),
      desc: t("howWeWork.step4Desc"),
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              {t("howWeWork.title")}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t("howWeWork.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              {/* Connecting Line */}
              <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

              <div className="grid grid-cols-4 gap-6 relative">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Step Circle */}
                    <div className="flex justify-center mb-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                        className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center relative z-10 shadow-lg"
                      >
                        <step.icon className="h-8 w-8 text-primary-foreground" />
                      </motion.div>
                    </div>

                    <Card className="text-center h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <span className="text-gradient font-display font-bold text-3xl">{step.number}</span>
                        <h3 className="font-display font-semibold text-xl mt-2 mb-3">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-lg flex-shrink-0">
                      <step.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-primary to-secondary mt-2" />
                    )}
                  </div>
                  <Card className="flex-1 mb-2">
                    <CardContent className="p-4">
                      <span className="text-gradient font-display font-bold text-xl">{step.number}</span>
                      <h3 className="font-display font-semibold text-lg mt-1 mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl font-bold mb-6">Our Commitment to Excellence</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At every step of our process, we prioritize transparency, communication, and quality. 
              Our team works closely with you to ensure that solutions are tailored to your specific needs 
              and deliver measurable results that drive your success.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWorkPage;
