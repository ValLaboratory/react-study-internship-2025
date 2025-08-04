import "./ShowApiResponse.css";
import { useState } from "react";

export function ShowApiResponse() {
  // 変数`pokemon`の定義にuseStateを使うように変更してみましょう
  const pokemon = {
    id: 0,
    name: "",
    height: 0,
    weight: 0,
    sprites: {
      front_default: "",
    },
  };

  return (
    <div className="show-api-response outline-effect">
      <h2>2. APIレスポンス取得</h2>
      <p>APIからデータを取得し表示してみましょう。</p>
      <button
        onClick={async () => {
          // getPokemon()関数またはgetRandomPokemon()関数を使い、APIからデータを取得し表示してみましょう。
        }}
      >
        取得
      </button>
      {pokemon && (
        <div className="pokemon-info">
          <h3>ポケモン情報</h3>
          <p>ID: {pokemon.id}</p>
          <p>名前: {pokemon.name}</p>
          <p>高さ: {pokemon.height}</p>
          <p>体重: {pokemon.weight}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
}

interface GetPokemonResult {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
}

/**
 * ポケモンの情報を取得する関数
 *
 * 〜〜〜使用例〜〜〜
 *
 * ```ts
 * const pokemon = await getPokemon("pikachu");
 * console.log(pokemon);
 * ```
 * @param id ポケモンのID
 * @returns ポケモンの情報
 */
async function getPokemon(id: string) {
  // ポケモンのAPIを叩いて、ポケモンの情報を取得する関数です。
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch Pokémon data");
  }
  return await res.json() as GetPokemonResult;
}

/**
 * ランダムなポケモンの情報を取得する関数
 *
 * 〜〜〜使用例〜〜〜
 *
 * ```ts
 * const randomPokemon = await getPokemonAtRandom();
 * console.log(randomPokemon);
 * ```
 *
 * @returns ランダムなポケモンの情報
 */
async function getRandomPokemon() {
  // ランダムなポケモンの情報を取得する関数です。
  const randomId = Math.floor(Math.random() * 1025) + 1; // ポケモンの数は1025匹
  return await getPokemon(randomId.toString());
}
