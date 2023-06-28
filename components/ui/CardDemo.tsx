import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          eleifend, sem vel tempor dignissim, lorem nisl consectetur nunc, nec
          faucibus sem nisi quis dolor.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button>Order Now</Button>
      </CardFooter>
    </Card>
    
  );
}