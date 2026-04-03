function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]!;

        if (map.has(diff)) {
            return [map.get(diff)!, i];
        }

        map.set(nums[i]!, i);
    }

    return [];
}

/*
Esse é um exercício de Two Sum.

O objetivo é percorrer o array e encontrar dois números cuja soma seja igual ao target,
retornando os índices desses valores.

A ideia é, para cada número, calcular quanto falta (diff) para atingir o target
e verificar se esse valor já apareceu antes usando um Map.
*/