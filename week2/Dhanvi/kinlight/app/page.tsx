"use client";

import { useState, useEffect } from "react";

type Person = {
  id: string;
  name: string;
  relationship: string;
  lastCheckIn: string | null;
};

export default function HomePage() {
  const [people, setPeople] = useState<Person[]>([]);
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("kinlight:people");
    if (saved) setPeople(JSON.parse(saved));
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) localStorage.setItem("kinlight:people", JSON.stringify(people));
  }, [people, isLoaded]);

  function addPerson(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setPeople((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name, relationship, lastCheckIn: null },
    ]);
    setName("");
    setRelationship("");
  }

  function checkIn(id: string) {
    setPeople((prev) =>
      prev.map((p) => (p.id === id ? { ...p, lastCheckIn: new Date().toISOString() } : p))
    );
  }

  if (!isLoaded) return <main style={{ padding: 40 }}>Loading...</main>;

  return (
    <main style={{ padding: 40, maxWidth: 600, margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>🏠 Kinlight</h1>
      <p>Life gets busy, and the people you love most are often the easiest to lose track of.</p>

      <form onSubmit={addPerson} style={{ display: "flex", gap: 8, margin: "20px 0" }}>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Relationship" value={relationship} onChange={(e) => setRelationship(e.target.value)} />
        <button type="submit">Add</button>
      </form>

      {people.length === 0 ? (
        <p>Your village is empty. Add someone above.</p>
      ) : (
        people.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: 12, marginBottom: 8, borderRadius: 8 }}>
            <strong>{p.name}</strong> — {p.relationship}
            <div>{p.lastCheckIn ? `Checked in: ${new Date(p.lastCheckIn).toLocaleDateString()}` : "Never checked in"}</div>
            <button onClick={() => checkIn(p.id)}>Mark checked in</button>
          </div>
        ))
      )}
    </main>
  );
}