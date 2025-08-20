import { signal as createSignal, signal, WritableSignal } from "@angular/core";

export var data: WritableSignal<{ id: string; title: string; amount: number | null; date: string }[]> = createSignal([]);

const dataFromDB = localStorage.getItem('expenses');

export var toggleMenu = signal(false);
if (dataFromDB) {
  data.set(JSON.parse(dataFromDB));
}