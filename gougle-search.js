async function queryServers(serverName, q) {
    let URL = `/${serverName}?q=${q}` ,
    BackUpURL = `/${serverName}_backup?q=${q}`
    return await Promise.race([getJSON(URL), getJSON(BackUpURL)])
}

async function gougleSearch(q) {
    let timeout = new Promise((resolve) => setTimeout(resolve, 80, new Error('timeout')))
    let web = queryServers('web', q),
    image = queryServers('image', q),
    video = queryServers('video', q);
    const res = await Promise.race([timeout, Promise.all([web, image, video])])
    if (res instanceof Error) {
        throw res
    }
    return { image: res[1], video: res[2], web: res[0] }
}