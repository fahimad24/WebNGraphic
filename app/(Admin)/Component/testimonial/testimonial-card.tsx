import { Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types/type";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  const { name, role, company, rating, comment, avatar } = testimonial;

  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="pt-6 flex flex-col h-full">
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < rating
                  ? "text-yellow-500 fill-yellow-500"
                  : "text-muted-foreground"
              )}
            />
          ))}
        </div>

        <blockquote className="flex-1 mb-4">
          <p className="text-sm text-muted-foreground">{comment}</p>
        </blockquote>

        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            {avatar ? <AvatarImage src={avatar} alt={name} /> : null}
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs text-muted-foreground">
              {role}, {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
