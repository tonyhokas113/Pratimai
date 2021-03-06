function longestFile(folder) {
    let nameLength = folder.name.length;
    if (folder.content) {
        for (let i = 0; i < folder.content.length; i++) {
            const child = folder.content[i];
            if (child.type === 'file') {
                const childNameLength = child.name.length
                if (childNameLength > nameLength) {
                nameLength = childNameLength;
                }
            } else if (child.type === 'folder') {
                const childNameLength = longestFile(child)
                if (childNameLength > nameLength) {
                nameLength = childNameLength;
                }
            }

        }

    }    
    return nameLength;
}

const pc = {
    name: 'C',
    type: 'folder',
    content: [
        {
            name: 'Programs Files',
            type: 'folder',
            content: [
                {
                    name: 'Android',
                    type: 'folder',
                    content: []
                },
                {
                    name: 'GIMP 2',
                    type: 'folder',
                    content: [
                        {
                            name: 'dbghelp.dll',
                            type: 'file',
                            size: 1497,
                            sizeUnits: 'kb'
                        },
                        {
                            name: 'gimp-2.10.exe',
                            type: 'file',
                            size: 9138,
                            sizeUnits: 'kb'
                        }
                    ]
                },
            ]
        },
        {
            name: 'Windows',
            type: 'folder',
            content: [
                {
                    name: 'DiagTrack',
                    type: 'folder',
                    content: [
                        {
                            name: 'analyticsevents.dat',
                            type: 'file',
                            size: 2,
                            sizeUnits: 'kb'
                        },
                        {
                            name: 'utc.allow.diffbase',
                            type: 'file',
                            size: 468,
                            sizeUnits: 'kb'
                        }
                    ]
                }
            ]
        },
        {
            name: 'msdia80.dll',
            type: 'file',
            size: 884,
            sizeUnits: 'kb'
        }
    ]
}

const totalKBs = longestFile(pc);

console.log('Longest name:', totalKBs, 'symbols');