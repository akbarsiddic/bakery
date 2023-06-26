import Image from "next/image";
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

export function ButtonDemo() {
  return <Button>Order Now</Button>;
}

export default function Home() {
  return (
    <>
      <div>
        {/* navbar for bakery website */}
        <nav className="bg-orange-600 flex justify-between items-center px-4 py-2">
          <div className="logo">
            <img
              src="http://via.placeholder.com/400"
              alt="logo"
              width={100}
              height={55}
            />
          </div>
          <div className="flex justify-between">
            <ul className="nav-links flex pr-4 space-x-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
            <div className="cart">
              <img
                src="http://via.placeholder.com/600"
                alt="cart"
                width={30}
                height={30}
              />
            </div>
          </div>
        </nav>

        {/* hero section */}
        <section className="hero h-screen flex justify-center items-center bg-gradient-to-b from-orange-600 to-orange-800">
          <div className="hero-text text-center">
            <h1 className="text-6xl font-bold">Fadiyo Bakery</h1>
            <p className="text-xl">Your Donut Heaven</p>
            <ButtonDemo />
          </div>
        </section>

        {/* About Fadiyo bakery */}
        <section className="about bg-black h-96 flex justify-center items-center p-4">
          <div className="about-text text-left">
            <h1 className="text-4xl font-bold text-white">
              About Fadiyo Bakery
            </h1>
            <div className="grid grid-cols-2 space-x-4 pt-4">
              <p className="text-xl text-white">
              Fadiyo Bakery is your ultimate destination for mouthwatering donut
              delights. We specialize in crafting unique and creative flavors to
              satisfy every sweet tooth.
            </p>
            <p className="text-xl text-white">
              Apart from donuts, we also offer a variety of other scrumptious food items. Indulge in our exceptional taste sensations and pair them with the perfect beverage for an unforgettable experience.
            </p>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section className="bg-gradient-to-b from-orange-800 to-orange-600 p-4 ">
          <div className="grid grid-cols-3 space-x-3">
            <CardDemo />
            <CardDemo />
            <CardDemo />
          </div>
        </section>
      </div>
    </>
  );
}
