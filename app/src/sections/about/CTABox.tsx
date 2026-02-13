import { CTAButton } from '@/components/shared/CTAButton';

export function CTABox() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-secondary/30 rounded-2xl p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-medium text-foreground mb-4">
                Want to work with us?
              </h2>
              <p className="text-foreground-secondary leading-relaxed">
                Ready to take the next step? Whether you're just exploring ideas or you're ready to get started, you can schedule an intro call to discuss your project in detail or simply fill out our contact form, and we'll get back to you
              </p>
            </div>
            <div className="flex md:justify-end">
              <CTAButton variant="primary" size="lg" showArrow>
                Book A Call
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
