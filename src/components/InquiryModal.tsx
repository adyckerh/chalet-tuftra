
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/useLanguage";
import { supabase } from "@/integrations/supabase/client";

interface InquiryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const InquiryModal = ({ open, onOpenChange }: InquiryModalProps) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    
    try {
      // Extract form data
      const guestsValue = formData.get('guests') as string;
      const inquiryData = {
        full_name: formData.get('name') as string,
        email: formData.get('email') as string,
        check_in: formData.get('checkin') as string || null,
        check_out: formData.get('checkout') as string || null,
        guests: guestsValue ? parseInt(guestsValue.split('-')[0]) : null,
        mesage: formData.get('message') as string || null
      };

      console.log('Submitting inquiry:', inquiryData);

      // Insert into Supabase - using from() with quoted table name for spaces
      const { error } = await supabase
        .from('"Guest inquiries"')
        .insert([inquiryData]);

      if (error) {
        console.error('Supabase error:', error);
        throw new Error(error.message);
      }

      toast({
        title: "Inquiry Sent Successfully!",
        description: "Thank you for your inquiry. We will contact you soon.",
      });
      
      onOpenChange(false);
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
      
    } catch (error: any) {
      console.error('Error submitting inquiry:', error);
      toast({
        title: "Error Sending Inquiry",
        description: error.message || "There was a problem submitting your inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-amber-900">
            {t('make_inquiry')}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-stone-700">
              {t('full_name')} *
            </Label>
            <Input 
              id="name" 
              name="name" 
              required 
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="email" className="text-stone-700">
              {t('email_address')} *
            </Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="mt-1"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="checkin" className="text-stone-700">
                {t('checkin_date')}
              </Label>
              <Input 
                id="checkin" 
                name="checkin" 
                type="date" 
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="checkout" className="text-stone-700">
                {t('checkout_date')}
              </Label>
              <Input 
                id="checkout" 
                name="checkout" 
                type="date" 
                className="mt-1"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="guests" className="text-stone-700">
              {t('number_guests')}
            </Label>
            <Select name="guests">
              <SelectTrigger className="mt-1">
                <SelectValue placeholder={t('select_guests')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-4">{t('guests_1_4')}</SelectItem>
                <SelectItem value="5-8">{t('guests_5_8')}</SelectItem>
                <SelectItem value="9-12">{t('guests_9_12')}</SelectItem>
                <SelectItem value="13+">{t('guests_13_plus')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="message" className="text-stone-700">
              {t('message')}
            </Label>
            <Textarea 
              id="message" 
              name="message" 
              rows={4}
              placeholder={t('message_placeholder')}
              className="mt-1"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-amber-900 hover:bg-amber-800 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : t('send_inquiry')}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
