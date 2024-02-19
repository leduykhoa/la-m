/*
 *  ............(¯''•.
 *  ..............(¯'•(¯'•............_/)/)
 *  ...............(¯'•.(¯'•.......((.....((
 *  ................(¯''•(¯'•...((.)..(. ‘ /)
 *  .................(¯''•.(¯'((.)....|\_/
 *  .....,,,~”¯¯¯''¯(_¸´(_.)......|
 *  ...(((./...........................)__
 *  ..((((.\......),,...........(...../__'\
 *  ..))))..\ . .//...¯¯¯¯¯¯¯' \.../... / /
 *  .(((...../ .// .............. | ./...../
 *  .))).....| ||.................| |...........♥♥♥
 *  ((........) \.................) \...........\|/
 *  .^^^^.""'"'.^^^^^^^..""".^^^^.""""
 *  ( ͡° ͜ʖ ͡°( ಠ ͜ʖ ಠ ) ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°( ಠ ͜ʖ ಠ ) ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°( ಠ ͜ʖ ಠ ) ͡° ͜ʖ ͡°)
 *  ≧◔◡◔≦ ≧◔◡◔≦ ≧◔◡◔≦ ≧◔◡◔≦ ≧◔◡◔≦ ≧◔◡◔≦ ≧◔◡◔≦ ≧◔◡◔≦
 *  
 *  Copyright © 2009-2022 Lê Duy Khoa. All rights reserved.
 *  Mail: leduykhoa060690@gmail.com
 *  Skype: leduykhoa060690
 *  Website: http://web-fast.com
 *  Mobile: +84973421508
 *  Telegram: https://t.me/leduykhoa
 *  GitHub: https://github.com/leduykhoa
 *  Date: 2022/07/21
 *  Time: 04:35:15
 */

// node ./render_migration_file.js

// https://stackoverflow.com/questions/27194359/javascript-pluralize-an-english-string
// https://gist.github.com/ezzabuzaid/1d49eac3c2887702636c0975a3a06ace

// 2.1. Quy tắc thông thường
// Quy tắc 1: Thêm “s” vào cuối danh từ để chuyển thành danh từ số nhiều
// Ví dụ: pen -> pens (cái bút), car -> cars (xe ô tô), house -> houses (ngôi nhà),…

// Quy tắc 2: Danh từ tận cùng là -ch, -sh, -s, -x, thêm -es vào cuối để chuyển thành danh từ số nhiều
// Ví dụ: watch -> watches (đồng hồ), box -> boxes (cái hộp), class -> classes (lớp học),…

// Lưu ý: Danh từ có đuôi ch nhưng phát âm là /k/ thì chỉ thêm “s” vào cuối danh từ.

// Ví dụ: stomach -> stomachs (cái bụng),..

// Quy tắc 3: Danh từ tận cùng là -y, đổi thành -ies để chuyển thành danh từ số nhiều
// Ví dụ: lady -> ladies (phụ nữ), baby -> babies (em bé),..

// Lưu ý: Một số danh từ tận cùng là y, nhưng chỉ thêm “s” để thành danh từ số nhiều.

// Ví dụ: boy -> boys (cậu bé), ray -> rays (tia),…

// Quy tắc 4: Danh từ tận cùng là -o, thêm -es vào cuối để chuyển thành danh từ số nhiều
// Ví dụ: potato -> potatoes (củ khoai tây), tomato -> tomatoes (quả cà chua),…

// Lưu ý: Một số danh từ tận cùng là o, nhưng chỉ thêm “s” vào cuối để thành danh từ số nhiều.

// Ví dụ: zoo -> zoos (sở thú), piano -> pianos (đàn piano), photo -> photos (bức ảnh)…

// Quy tắc 5: Danh từ tận cùng là -f,-fe,-ff, đổi thành -ves để thành danh từ số nhiều.
// Ví dụ: bookshelf -> bookshelves (giá sách), số nhiều của leaf -> leaves (cái lá), số nhiều của knife -> knives (con dao),…

// Lưu ý: Một số trường hợp danh từ tận cùng là f, nhưng chỉ thêm “s” để thành danh từ số nhiều. 

// Ví dụ: roof -> roofs (mái nhà), cliff -> cliffs (vách đá), belief -> beliefs (niềm tin), chef -> chefs (đầu bếp), chief -> chief (người đứng đầu)… 

// Quy tắc 6: Danh từ tận cùng là -us, đổi thành -i để thành danh từ số nhiều.
// Ví dụ: cactus – cacti (xương rồng), focus – foci (tiêu điểm)

// Quy tắc 7: Danh từ tận cùng là -is, đổi thành -es để thành danh từ số nhiều.
// Ví dụ: analysis -> analyses (phân tích), ellipsis – ellipses (dấu ba chấm),…

// Quy tắc 8: Danh từ tận cùng là -on, đổi thành -a để thành danh từ số nhiều.
// Ví dụ: phenomenon -> phenomena (hiện tượng), criterion – criteria (tiêu chí),…

// 2.2. Trường hợp đặc biệt
// Có một số danh từ khi chuyển từ danh từ số ít sang danh từ số nhiều vẫn giữ nguyên, không thay đổi.
// Ví dụ: a deer -> deer (con hươu), a fish -> fish (con cá), a sheep – sheep (con cừu),..

// Trong trường hợp này, bạn cần nhìn vào ngữ cảnh cụ thể của câu nói để xác định đó là danh từ số nhiều hay số ít. 

// Ví dụ: Leo caught one fish, but I caught three fish. (Leo bắt một con cá, nhưng tôi bắt được ba con cá) – fish số 1 là danh từ số ít, fish số 2 là danh từ số nhiều.

// Xem thêm: Danh từ cụ thể và danh từ trừu tượng trong tiếng Anh

// Một số danh từ số nhiều bất quy tắc:
// Trong tiếng Anh, có một số danh từ khi chuyển từ số ít sang số nhiều sẽ thay đổi hoàn toàn mà không theo quy tắc nào cả. Cách tốt nhất là bạn hãy ghi chú lại và học thuộc những từ sau đây:

// Ví dụ:

// a person -> people (người)
// a man -> men (người đàn ông)
// a woman -> women (người phụ nữ)
// a child -> children (trẻ em)
// a foot -> feet (bàn chân)
// a tooth -> teeth (răng)
// mouse -> mice (con chuột)
// goose -> geese (con ngỗng)

String.prototype.plural = function (revert) {

    let plural = {
        '(quiz)$': "$1zes",
        '^(ox)$': "$1en",
        '([m|l])ouse$': "$1ice",
        '(matr|vert|ind)ix|ex$': "$1ices",
        '(x|ch|ss|sh)$': "$1es",
        '([^aeiouy]|qu)y$': "$1ies",
        '(hive)$': "$1s",
        '(?:([^f])fe|([lr])f)$': "$1$2ves",
        '(shea|lea|loa|thie)f$': "$1ves",
        'sis$': "ses",
        '([ti])um$': "$1a",
        '(tomat|potat|ech|her|vet)o$': "$1oes",
        '(bu)s$': "$1ses",
        '(alias)$': "$1es",
        '(octop)us$': "$1i",
        '(ax|test)is$': "$1es",
        '(us)$': "$1es",
        '([^s]+)$': "$1s"
    };

    let singular = {
        '(quiz)zes$': "$1",
        '(matr)ices$': "$1ix",
        '(vert|ind)ices$': "$1ex",
        '^(ox)en$': "$1",
        '(alias)es$': "$1",
        '(octop|vir)i$': "$1us",
        '(cris|ax|test)es$': "$1is",
        '(shoe)s$': "$1",
        '(o)es$': "$1",
        '(bus)es$': "$1",
        '([m|l])ice$': "$1ouse",
        '(x|ch|ss|sh)es$': "$1",
        '(m)ovies$': "$1ovie",
        '(s)eries$': "$1eries",
        '([^aeiouy]|qu)ies$': "$1y",
        '([lr])ves$': "$1f",
        '(tive)s$': "$1",
        '(hive)s$': "$1",
        '(li|wi|kni)ves$': "$1fe",
        '(shea|loa|lea|thie)ves$': "$1f",
        '(^analy)ses$': "$1sis",
        '((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$': "$1$2sis",
        '([ti])a$': "$1um",
        '(n)ews$': "$1ews",
        '(h|bl)ouses$': "$1ouse",
        '(corpse)s$': "$1",
        '(us)es$': "$1",
        's$': ""
    };

    let irregular = {
        'move': 'moves',
        'foot': 'feet',
        'goose': 'geese',
        'sex': 'sexes',
        'child': 'children',
        'man': 'men',
        'tooth': 'teeth',
        'person': 'people'
    };

    let uncountable = [
        'sheep',
        'fish',
        'deer',
        'moose',
        'series',
        'species',
        'money',
        'rice',
        'information',
        'equipment',
        'bison',
        'cod',
        'offspring',
        'pike',
        'salmon',
        'shrimp',
        'swine',
        'trout',
        'aircraft',
        'hovercraft',
        'spacecraft',
        'sugar',
        'tuna',
        'you',
        'wood'
    ];

    // save some time in the case that singular and plural are the same
    if (uncountable.indexOf(this.toLowerCase()) >= 0)
        return this;

    // check for irregular forms
    for (word in irregular) {

        let pattern = new RegExp(word + `$`, 'i');
        let replace = irregular[word];
        if (revert) {
            pattern = new RegExp(irregular[word] + `$`, 'i');
            replace = word;
        }
        if (pattern.test(this))
            return this.replace(pattern, replace);
    }

    let arrayStr = plural;
    if (revert) {
        arrayStr = singular;
    }

    // check for matches using regular expressions
    for (reg in arrayStr) {

        let pattern = new RegExp(reg, 'i');

        if (pattern.test(this))
            return this.replace(pattern, arrayStr[reg]);
    }

    return this;
}

const fs = require(`fs`);
const tableList = `tableList.csv`;
const dateTimeCurrent = new Date();
// const migrationsRender = `./migrationsRender`;
const migrationsRender = `./database/migrations`;
const sqlMigrationsUpdate = `${migrationsRender}/0000_sql_migrations_update.sql`;
const baseTable = fs.readFileSync(`./create_base_table.php`);
const dateRunTime = new Date();
const eavTables = [`datetime`, `decimal`, `int`, `text`, `varchar`];
const eavStr =
    [
        //   [ '__EAV_NAME____EAV_TYPE__', ' ', '' ],
        [
            'id',
            'increments',
            'Entity Type Id',
            "$table->increments('id')->unsigned()->comment('Entity Type Id');"
        ],
        [
            'value',
            '__EAV_TYPE_REAL__',
            'Attribute Value',
            "$table->__EAV_TYPE_REAL__('value')->nullable()->default(null)->comment('Attribute Value');"
        ],
        [
            'entity_type_id',
            'smallInteger',
            'Entity Type Id',
            "$table->smallInteger('entity_type_id')->default(1)->comment('Entity Type Id');"
        ],
        [
            'attribute_id',
            'smallInteger',
            'Attribute Id',
            "$table->smallInteger('attribute_id')->default(1)->comment('Attribute Id');"
        ],
        [
            'store_id',
            'smallInteger',
            'Store Id',
            "$table->smallInteger('store_id')->default(0)->unsigned()->comment('Store Id');"
        ],
        [
            'entity_id',
            '__ENTITY_ID_TYPE__',
            'Entity Id',
            "$table->__ENTITY_ID_TYPE__('entity_id')->comment('Entity Id');"
        ],
        [
            'is_active',
            'boolean',
            '',
            "$table->boolean('is_active')->default(true);"
        ],
        [
            'deleted_at',
            'timestamp',
            'Xác định bản ghi đã xóa chưa',
            "$table->softDeletesTz();"
        ],
        [
            'created_at',
            'timestamp',
            'Thời điểm tạo mới bản ghi',
            "$table->timestamp('created_at')->nullable()->useCurrent()->comment('Thời điểm tạo mới bản ghi');"
        ],
        [
            'updated_at',
            'timestamp',
            'Thời điểm cập nhật bản ghi',
            "$table->timestamp('updated_at')->nullable()->useCurrent()->comment('Thời điểm cập nhật bản ghi');"
        ]
    ];

let migrationsRenderYear = `2022`;
let migrationsRenderMonth = `08`;
let migrationsRenderDay = `08`;
let migrationsRenderNumber = `600`;
let migrationsRenderName = `${dateRunTime.getFullYear()}_${getZeroForNumber(dateRunTime.getMonth() + 1)}_${getZeroForNumber(dateRunTime.getDate())}`;
migrationsRenderName = `${migrationsRenderYear}_${migrationsRenderMonth}_${migrationsRenderDay}`;

let data = fs.readFileSync(`./render_migration_file.json`);
let sql = [];
let tables = [];
let tableNumber = 0;
let tableListData = [];
// ===================================================================================================================================
function getZeroForNumber(number, length = 2) {
    return String(number).padStart(length, `0`);
}
function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function strToCode(str) {
    str = str.replace(/_/g, ``);
    str = str
        .split(``)
        .map((item, index) => {
            if (index === 0) {
                return item.toLowerCase();
            } else if (item.charCodeAt() < 91) {
                return `_${item.toLowerCase()}`;
            }
            return item;
        });
    return str.join(``);
}

function pluralNouns(str, type = `table`) {
    let tableNameArray = str.split(`_`);
    tableNameArray[tableNameArray.length - 1] = tableNameArray[tableNameArray.length - 1].plural();
    if (type == `table`) {
        return tableNameArray.join(`_`);
    }
    return tableNameArray
        .map((item) => { return ucFirst(`${item}`) }).join(``);
}

// ===================================================================================================================================
function renderTable(tableName, tableFields, tableDesc) {
    tableNumber++;
    let tableNameArray = tableName.split(`_`);
    tableNameArray[tableNameArray.length - 1] = tableNameArray[tableNameArray.length - 1].plural();
    let tableNameClass = pluralNouns(tableName, `class`);
    tableName = pluralNouns(tableName);
    let dataFile = `${baseTable}`;
    const tableStrCreate = `${tableFields.map(item => { return item[item.length - 1] }).join(`\n            `)}`;

    const fileClassName = `${migrationsRender}/${migrationsRenderName}_${migrationsRenderNumber}${getZeroForNumber(tableNumber, 3)}_create_${tableName}_table.php`;
    sql.push(`('${migrationsRenderName}_${migrationsRenderNumber}${getZeroForNumber(tableNumber, 3)}_create_${tableName}_table', 0)`);
    const dataTable = dataFile
        .replace(/__YEAR__/g, `${dateTimeCurrent.getFullYear()}`)
        .replace(/__MONTH__/g, `${getZeroForNumber(dateTimeCurrent.getMonth() + 1)}`)
        .replace(/__DAY__/g, `${getZeroForNumber(dateTimeCurrent.getDate())}`)
        .replace(/__HOUR__/g, `${getZeroForNumber(dateTimeCurrent.getHours())}`)
        .replace(/__MINUTE__/g, `${getZeroForNumber(dateTimeCurrent.getMinutes())}`)
        .replace(/__SECOND__/g, `${getZeroForNumber(dateTimeCurrent.getSeconds())}`)
        .replace(/__CLASS_NAME__/g, `${tableNameClass}`)
        .replace(/__TABLE_NAME__/g, tableName)
        .replace(/__FIELDS__/g, tableStrCreate)
        .replace(/__COMMENT__/g, tableDesc);
    fs.writeFile(`${fileClassName}`, `${dataTable}`, (err) => {
        if (err) {
            console.log(``);
            console.error(err);
            console.log(``);
        }
    });
}

// ===================================================================================================================================
JSON.parse(data.toString())
    .forEach((item) => {
        const classNameTemp = item.shift().split(`\/\/\/`);
        const tableName = `${classNameTemp[0]}`;
        const eav = `${((classNameTemp[1]) ? `${classNameTemp[1]}` : ``)}`;
        const type = `${((classNameTemp[2]) ? `${classNameTemp[2]}` : `__`)}`;
        const tableDesc = `${((classNameTemp[3]) ? `${classNameTemp[3]}` : ``)}`;
        let tableFields = item
            .map((field) => {
                // https://laravel.com/docs/8.x/migrations#creating-tables
                field = field.split(`\/\/\/`);
                const fieldName = ((field[0]) ? `${field[0]}` : ``);
                const fieldType = ((field[1]) ? `${field[1]}` : ``);
                const fieldParam = ((field[2] && field[2] != `__`) ? `${field[2]}` : ``);
                const fieldNullable = ((field[3] && (field[3] == `__` || field[3] == `NOT_NULL`)) ? `` : `->nullable()`);
                const fieldDefaultValue = ((field[4] && field[4] == `__`) ? `` : `->default(${field[4]})`);
                const fieldMore = ((field[5] && field[5] == `__`) ? `` : `${field[5]}`);
                const fieldDesc = ((field[6] && field[6] == `__`) ? `` : `->comment('${field[6]}')`);
                const fieldDescText = ((field[6] && field[6] == `__`) ? `` : `${field[6]}`);

                let fieldTypeFirst = ``;
                let fieldTypeSecond = ``;
                if (fieldParam.indexOf(`\[`) === 0) {
                    fieldTypeFirst = `, ${fieldParam}`;
                } else if (fieldParam !== ``) {
                    fieldTypeFirst = ((fieldParam.indexOf(`,`) > 0) ? `, ${fieldParam.split(`,`)[0].replace(/\(/g, ``)}` : `, ${fieldParam.replace(/\(/g, ``).replace(/\)/g, ``)}`);
                    fieldTypeSecond = ((fieldParam.indexOf(`,`) > 0) ? `, ${fieldParam.split(`,`)[1].replace(/\)/g, ``)}` : ``);
                }
                let params = `'${fieldName}'${fieldTypeFirst}${fieldTypeSecond}`;
                if (params == `'__'`) {
                    params = ``;
                }
                const str = `$table->${fieldType}(${params})${fieldNullable}${fieldDefaultValue}${fieldMore}${fieldDesc};`;
                return [fieldName, fieldType, fieldDescText, str];
            });
        tableFields.push([`deleted_at`, `timestamp`, `Xác định bản ghi đã xóa chưa`, `$table->softDeletesTz();`]);
        tableFields.push([`created_at`, `timestamp`, `Thời điểm tạo mới bản ghi`, `$table->timestamp('created_at')->nullable()->useCurrent()->comment('Thời điểm tạo mới bản ghi');`]);
        tableFields.push([`updated_at`, `timestamp`, `Thời điểm cập nhật bản ghi`, `$table->timestamp('updated_at')->nullable()->useCurrent()->comment('Thời điểm cập nhật bản ghi');`]);

        renderTable(tableName, tableFields, tableDesc);
        console.log(tableName, tableDesc)

        if (eav && eav == `eav`) {
            eavTables.forEach((eavTable) => {
                let eavTypeReal = eavTable;
                if (eavTable == `int`) {
                    eavTypeReal = `integer`;
                } else if (eavTable == `varchar`) {
                    eavTypeReal = `string`;
                }
                let eavTableName = `${tableName}_${eavTable}`;
                let typeEntityId = ((type == `__`) ? `integer` : type);
                let eavTableFields = JSON.parse(
                    JSON
                        .stringify(eavStr)
                        .replace(/__EAV_TYPE_REAL__/g, `${eavTypeReal}`)
                        .replace(/__ENTITY_ID_TYPE__/g, `${typeEntityId}`)
                );
                renderTable(eavTableName, eavTableFields, `${tableDesc}//${eavTable}`);
                eavTableFields.unshift([`${pluralNouns(eavTableName)}`, ` `, `${tableDesc}//${eavTable}`]);
                tableListData.push(eavTableFields);
            });
        }

        tableFields.unshift([`${pluralNouns(tableName)}`, ` `, tableDesc]);
        tableListData.push(tableFields);
    });
// ===================================================================================================================================
fs.writeFile(`${tableList}`, `${tableListData
    .map((item) => {
        return item
            .map((itemField) => {
                return itemField.join(`,`)
            })
            .join(`\n`)
    })
    .join(`\n\n`)
    }`, (err) => {
        if (err) {
            console.log(``);
            console.error(err);
            console.log(``);
        }
    });
fs.writeFile(`${sqlMigrationsUpdate}`, `INSERT INTO \`migrations\` (\`migration\`, \`batch\`) VALUES ${sql.join(`,`)};`, (err) => {
    if (err) {
        console.log(``);
        console.error(err);
        console.log(``);
    }
});

console.log(`tables: `, tableNumber);
