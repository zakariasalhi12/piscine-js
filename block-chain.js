function blockChain(data, prev = { index: 0, hash: '0' }) {
    let index = prev.index + 1
    const block = {
        index: index,
        hash: hashCode(`${index}${prev.hash}${JSON.stringify(data)}`),
        data: data,
        prev: prev,
        chain: function (nextData) {
            return blockChain(nextData, this);
        }
    };

    return block;
}