/**
 * Transformar el texto en una tupla: la palabra original y la reducida
 * 
 * @param   {string} text 
 * @param   {'first_letters' | 'words_and_underscores'} memorizeMode 
 * @returns {array}
 */
export default function transformText(text, memorizeMode)
{
    const entryArray = text.split(' ').filter(el => el !== '');

    // Primera letra
    if (memorizeMode == 'first_letters') {
        return entryArray.map(el =>
        {
            if (el == 'etc' || el == 'etc.') return ['etcétera', 'etc.'];

            if (el.startsWith('(')) return [el, el.substr(0, 2)]
            if (el.startsWith('[')) return [el, el.substr(0, 2)]
            if (el.startsWith('{')) return [el, el.substr(0, 2)]
            if (el.startsWith('¡')) return [el, el.substr(0, 2)]
            if (el.startsWith('¿')) return [el, el.substr(0, 2)]

            if (el.endsWith(')')) return [el, el.substr(0, 1) + ')'];
            if (el.endsWith(').')) return [el, el.substr(0, 1) + ').'];
            if (el.endsWith('),')) return [el, el.substr(0, 1) + '),'];
            if (el.endsWith('):')) return [el, el.substr(0, 1) + '):'];
            if (el.endsWith(');')) return [el, el.substr(0, 1) + ');'];
            if (el.endsWith(')...')) return [el, el.substr(0, 1) + ')...'];

            if (el.endsWith(']')) return [el, el.substr(0, 1) + ']'];
            if (el.endsWith('].')) return [el, el.substr(0, 1) + '].'];
            if (el.endsWith('],')) return [el, el.substr(0, 1) + '],'];
            if (el.endsWith(']:')) return [el, el.substr(0, 1) + ']:'];
            if (el.endsWith('];')) return [el, el.substr(0, 1) + '];'];
            if (el.endsWith(']...')) return [el, el.substr(0, 1) + ']...'];

            if (el.endsWith('}')) return [el, el.substr(0, 1) + '}'];
            if (el.endsWith('}.')) return [el, el.substr(0, 1) + '}.'];
            if (el.endsWith('},')) return [el, el.substr(0, 1) + '},'];
            if (el.endsWith('}:')) return [el, el.substr(0, 1) + '}:'];
            if (el.endsWith('};')) return [el, el.substr(0, 1) + '};'];
            if (el.endsWith('}...')) return [el, el.substr(0, 1) + '}...'];

            if (el.endsWith('.')) return [el, el.substr(0, 1) + '.'];
            if (el.endsWith(',')) return [el, el.substr(0, 1) + ','];
            if (el.endsWith('...')) return [el, el.substr(0, 1) + '...'];
            if (el.endsWith('?')) return [el, el.substr(0, 1) + '?'];
            if (el.endsWith('!')) return [el, el.substr(0, 1) + '!'];

            return [el, el.substr(0, 1)];
        })
    }

    // Palabras y guiones bajos
    else if (memorizeMode == 'words_and_underscores') {
        return entryArray.map(el =>
        {
            if (el == 'etc' || el == 'etc.') return ['etcétera', 'etc.'];

            const arrayToReturn = [el, el.substr(0, Math.ceil(el.length / 3)) + ' _'.repeat(el.length - Math.ceil(el.length / 3))];

            if(arrayToReturn[0].endsWith(')')) arrayToReturn[1] = arrayToReturn[1].replace(/_$/,")");
            if(arrayToReturn[0].endsWith(').')) arrayToReturn[1] = arrayToReturn[1].replace(/_ _$/,").");
            if(arrayToReturn[0].endsWith('),')) arrayToReturn[1] = arrayToReturn[1].replace(/_ _$/,"),");
            if(arrayToReturn[0].endsWith(');')) arrayToReturn[1] = arrayToReturn[1].replace(/_ _$/,");");
            if(arrayToReturn[0].endsWith(')...')) arrayToReturn[1] = arrayToReturn[1].replace(/_ _ _ _$/,")...");

            if(arrayToReturn[0].endsWith(']')) arrayToReturn[1] = arrayToReturn[1].replace(/_$/,"]");
            if(arrayToReturn[0].endsWith('].')) arrayToReturn[1] = arrayToReturn[1].replace(/_ _$/,"].");
            if(arrayToReturn[0].endsWith('],')) arrayToReturn[1] = arrayToReturn[1].replace(/_ _$/,"],");
            if(arrayToReturn[0].endsWith(']:')) arrayToReturn[1] = arrayToReturn[1].replace(/_ _$/,"]:");
            if(arrayToReturn[0].endsWith('];')) arrayToReturn[1] = arrayToReturn[1].replace(/_ _$/,"];");
            if(arrayToReturn[0].endsWith(']...')) arrayToReturn[1] = arrayToReturn[1].replace(/_ _ _ _$/,"]...");

            if(arrayToReturn[0].endsWith('}')) arrayToReturn[1] = arrayToReturn[1].replace(/_$/,"}");
            if(arrayToReturn[0].endsWith('}.')) arrayToReturn[1] = arrayToReturn[1].replace(/_ _$/,"}.");
            if(arrayToReturn[0].endsWith('},')) arrayToReturn[1] = arrayToReturn[1].replace(/_ _$/,"},");
            if(arrayToReturn[0].endsWith('}:')) arrayToReturn[1] = arrayToReturn[1].replace(/_ _$/,"}:");
            if(arrayToReturn[0].endsWith('};')) arrayToReturn[1] = arrayToReturn[1].replace(/_ _$/,"};");
            if(arrayToReturn[0].endsWith('}...')) arrayToReturn[1] = arrayToReturn[1].replace(/_ _ _ _$/,"}...");

            if(arrayToReturn[0].endsWith('.')) arrayToReturn[1] = arrayToReturn[1].replace(/_$/,".");
            if(arrayToReturn[0].endsWith(',')) arrayToReturn[1] = arrayToReturn[1].replace(/_$/,",");
            if(arrayToReturn[0].endsWith('...')) arrayToReturn[1] = arrayToReturn[1].replace(/_ _ _$/,"...");
            if(arrayToReturn[0].endsWith(';')) arrayToReturn[1] = arrayToReturn[1].replace(/_$/,";");
            if(arrayToReturn[0].endsWith(':')) arrayToReturn[1] = arrayToReturn[1].replace(/_$/,":");
            if(arrayToReturn[0].endsWith('?')) arrayToReturn[1] = arrayToReturn[1].replace(/_$/,"?");
            if(arrayToReturn[0].endsWith('!')) arrayToReturn[1] = arrayToReturn[1].replace(/_$/,"!");

            return arrayToReturn;
        })
    }
}