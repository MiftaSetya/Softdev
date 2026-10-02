'use client';

import { useState } from 'react';
import CardComponent from './../components/card_component';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [search, setSearch] = useState('');
  const [namaBaru, setNamaBaru] = useState('');

  const handleTambah = () => {
    if (namaBaru.trim() === '') return;

    setMahasiswa([...mahasiswa, { nama: namaBaru }]);
    setNamaBaru('');
  };

  const mahasiswaFiltered = mahasiswa.filter((mhs) =>
    mhs.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-w-xl p-8 mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Daftar Mahasiswa
      </h1>

      <div className="mb-5">
        <Input
          type="text"
          className="focus-visible:ring-0 focus-visible:border"
          placeholder="Cari nama"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex gap-2 mb-5">
        <Input
          type="text"
          className="focus-visible:ring-0 focus-visible:border"
          placeholder="Nama"
          value={namaBaru}
          onChange={(e) => setNamaBaru(e.target.value)}
        />
        <Button
          className="bg-blue-600 text-white"
          onClick={handleTambah}>
          Tambah
        </Button>
      </div>

      <div className="space-y-4 mb-5">
        {mahasiswaFiltered.map((mhs, index) => (
          <CardComponent
            key={index}
            nama={mhs.nama}
          />
        ))}
      </div>
    </div>
  );
}