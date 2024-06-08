import Image from "next/image";
import { Item } from "./components/side-nav-item"
import Reco from "./components/recommandations";
import { AddForm } from "./components/add-form";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col item-center justify-between p-24">
      <h1 className="font-semibold self-center">Reviews</h1>
      <br />
    {/*<Item/>*/}
    <div>
    <Reco imgURL="https://static.wikia.nocookie.net/pacman/images/2/24/Pac-Man-0.png" message="hellooo" movieURL="dugas" extra="gdsyigf" rating = "5" ></Reco>
    </div>
    <br />
    <div>
      <h2 className="font-medium">Add a movie</h2>
    <AddForm/>
    </div>
    </main>
  );
}
