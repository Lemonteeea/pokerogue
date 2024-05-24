import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const tutorial: SimpleTranslationEntries = {
  "intro": `欢迎来到PokéRogue！这是一款以战斗为核心的融合了roguelite元素的宝可梦同人游戏。
    $本游戏未进行商业化，我们没有\nPokémon或Pokémon使用的版
    $权资产的所有权。
    $游戏仍在开发中，但已可完整游玩。如需报\n告错误，请使用 Discord 社区。
    $如果游戏运行缓慢，请确保在浏览器设置中\n打开了“硬件加速”。`,

  "accessMenu": "在等待输入时，按 M 或 Escape 键可访\n问菜单。菜单包含设置和各种功能。",

  "menu": `在此菜单中，您可以访问设置。
    $在设置中，您可以更改游戏速度、窗口样式\n和其他选项。
    $这里还有各种其他功能，请务必全部查看！`,

  "starterSelect": `在此页面中，您可以选择您的初始宝可梦。\n这些是您最初的队伍成员。
    $每个初始宝可梦都有一个费用值。您的队伍\n最多可以拥有6名成员，只要总费用不超过10。
    $您还可以根据您捕获或孵化的变种选择性别\n、特性和形态。
    $一个物种个体值是您捕获或孵化的所有宝可\n梦中最好的，所以尽量获得更多同种宝可梦！`,

  "pokerus": `每天随机3个可选的初始宝可梦会有紫色边\n框。
    $如果您看到您拥有的初始宝可梦带有紫色边\n框，请尝试将其添加到您的队伍中。请务必
    $查看其概况！`,

  "statChange": `只要您的宝可梦没有被召回，属性变化就会\n在战斗中持续存在。
    $在训练家战斗之前和进入新的宝可梦群落之\n前，您的宝可梦会被召回。
    $您还可以通过按住C或Shift键来查看\n场上宝可梦的能力变化。`,

  "selectItem": `每次战斗后，您都可以选择 3 个随机物品。\n您只能选择其中一个。
    $这些物品包括消耗品、宝可梦携带物品和永\n久被动道具。
    $大多数非消耗品的效果会以各种方式叠加。
    $某些物品只有在可以使用时才会出现，例如\n进化物品。
    $您还可以使用转移选项在宝可梦之间转移携\n带物品。
    $一旦您获得了携带物品，转移选项就会出现\n在右下角。
    $您可以用金钱购买消耗品，并且随着您游戏\n的深入，将会有更多种类的消耗品可供选择。
    $请务必在选择随机物品之前购买这些消耗品\n因为一旦您选择，游戏就会进入下一场战斗。`,

  "eggGacha": `在此页面中，您可以使用您的兑换券兑换宝\n可梦蛋。
    $蛋需要孵化，并且在每场战斗后都会减少孵\n化周期。稀有蛋需要更长时间才能孵化。
    $孵化的宝可梦不会被添加到您的队伍中，它\n们将被添加到您的初始宝可梦中。
    $从蛋中孵化的宝可梦通常比野生宝可梦具有\n更好的个体值。
    $有些宝可梦只能从蛋中获得。
    $有 3 种不同的扭蛋机可供选择，每种扭蛋机\n都有不同的奖励，请选择最适合您的！`,
} as const;
