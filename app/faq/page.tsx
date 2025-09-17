import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Search, HelpCircle, ShoppingCart, Truck, RotateCcw, Shield } from "lucide-react"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Orders & Shopping",
      icon: ShoppingCart,
      questions: [
        {
          question: "How do I place an order?",
          answer:
            "To place an order, browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping information and payment details to complete your purchase.",
        },
        {
          question: "Can I modify or cancel my order?",
          answer:
            "You can modify or cancel your order within 1 hour of placing it. After that, please contact our customer service team for assistance.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards, debit cards, bank transfers, and cash on delivery (COD) for orders within Pakistan.",
        },
        {
          question: "Do you offer installment plans?",
          answer:
            "Yes, we offer installment plans through various banks and financial institutions. Check the product page for available installment options.",
        },
      ],
    },
    {
      title: "Shipping & Delivery",
      icon: Truck,
      questions: [
        {
          question: "What are your shipping charges?",
          answer:
            "Shipping is free for orders over Rs. 2000. For orders below Rs. 2000, shipping charges vary by location: Rs. 150 for major cities and Rs. 250 for other areas.",
        },
        {
          question: "How long does delivery take?",
          answer:
            "Delivery typically takes 2-3 business days for major cities (Karachi, Lahore, Islamabad) and 3-5 business days for other locations.",
        },
        {
          question: "Do you deliver nationwide?",
          answer:
            "Yes, we deliver to all major cities and towns across Pakistan. Some remote areas may have extended delivery times.",
        },
        {
          question: "Can I track my order?",
          answer:
            "Yes, you'll receive a tracking number via SMS and email once your order is shipped. You can track your order status in your account dashboard.",
        },
      ],
    },
    {
      title: "Returns & Exchanges",
      icon: RotateCcw,
      questions: [
        {
          question: "What is your return policy?",
          answer:
            "We offer a 30-day return policy for most items. Products must be in original condition with all packaging and accessories.",
        },
        {
          question: "How do I return an item?",
          answer:
            "Contact our customer service to initiate a return. We'll provide you with a return authorization number and pickup instructions.",
        },
        {
          question: "When will I receive my refund?",
          answer: "Refunds are processed within 7-10 business days after we receive and inspect the returned item.",
        },
        {
          question: "Can I exchange an item instead of returning it?",
          answer:
            "Yes, exchanges are available for size, color, or model changes. The price difference (if any) will be adjusted accordingly.",
        },
      ],
    },
    {
      title: "Account & Security",
      icon: Shield,
      questions: [
        {
          question: "How do I create an account?",
          answer:
            "Click 'Create Account' in the top menu, fill in your details, and verify your email address. Having an account makes checkout faster and lets you track orders.",
        },
        {
          question: "I forgot my password. What should I do?",
          answer:
            "Click 'Forgot Password' on the login page, enter your email address, and we'll send you instructions to reset your password.",
        },
        {
          question: "Is my personal information secure?",
          answer:
            "Yes, we use industry-standard encryption and security measures to protect your personal and payment information.",
        },
        {
          question: "How do I update my account information?",
          answer:
            "Log into your account and go to 'My Account' to update your personal information, addresses, and preferences.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Help Center
            </Badge>
            <h1 className="text-4xl font-bold mb-4 text-balance">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Find answers to common questions about shopping, shipping, returns, and more.
            </p>
          </div>

          {/* Search Bar */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="search"
                  placeholder="Search for answers..."
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </CardContent>
          </Card>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>

                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border rounded-lg px-4"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Still Need Help */}
          <Card className="mt-12">
            <CardContent className="p-8 text-center">
              <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our customer service team is here to help you with any
                questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="/contact">Contact Support</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+923001234567">Call Us Now</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
