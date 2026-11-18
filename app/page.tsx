import Policko from "@/components/Inventar/Policko";

export default function Home() {
  return (
    //pripravit html pro stranku herniho UI
    // 1. Skóre
    // 2. Čas
    // 3. Životy
    // 4. Herní obrazovka
    // 5. Inventář
    // ! Nezapomeňte vytvořit i kontejnery !
    <div className="flex w-screen h-screen flex-col">
      <div className="flex bg-green-700 h-10 justify-between items-center">
        <p className="text-2xl font-black p-3">Skóre: 1574 bodů</p>
        <p className="text-2xl p-3">20:47</p>
        <p className="text-2xl font-black p-3">457/2680 HP</p>
      </div>
      <div className="w-1/1 h-1/1 bg-blue-950"></div>
      <div className="flex bg-gray-600 h-30 justify-center items-center gap-5">
        <Policko cisloPolicka={1}></Policko>
        <Policko cisloPolicka={2}></Policko>
        <Policko cisloPolicka={3}></Policko>
        <Policko cisloPolicka={4}></Policko>
        <Policko cisloPolicka={5}></Policko>
        <Policko cisloPolicka={6}></Policko>
      </div>
    </div>
  );
}
