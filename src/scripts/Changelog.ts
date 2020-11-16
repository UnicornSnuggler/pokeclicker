enum ChangeLogType {
    DEFAULT,
    UPDATE,
    NEW,
    CHANGE,
    FIXED,
    REMOVED,
    EVENT,
}

type ChangelogConfig = {
    display: string,
    label: string,
}

const changelogType: Record<keyof typeof ChangeLogType, ChangelogConfig> = {
    UPDATE: { display: 'dark', label: 'UPDATE' },
    NEW: { display: 'success', label: 'NEW' },
    CHANGE: { display: 'primary', label: 'CHANGE' },
    FIXED: { display: 'warning', label: 'FIXED' },
    REMOVED: { display: 'danger', label: 'REMOVED' },
    EVENT: { display: 'info', label: 'EVENT' },
    DEFAULT: { display: 'default', label: '-' }, // unused - can be changed
};

class Changelog {
    constructor(
        public type: ChangelogConfig = changelogType.DEFAULT,
        public description: string
    ) {}
}

class ChangelogUpdate extends Changelog {
    constructor(
        version: string,
        date: Date
    ) {
        const dateFormat: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'long', day: 'numeric'};
        const description = `<code>${version}  -  ${date.toLocaleDateString(undefined, dateFormat)}</code>`;
        super(changelogType.UPDATE, description);
    }
}

/**
 * Add your changes to the top of the changelog. Please do not increase the version number.
 *
 * MAJOR - Will stay at 0 during development, 1 after the first public release
 * MINOR - Will increment for each feature refactor or large changes to a feature
 * PATCH - Increment for small changes, bugfixes, UI changes.
 */
const changelogItems = [
    // note that month is 0 indexed
    // v0.6.4
    new ChangelogUpdate('v0.6.4', new Date(2020, 10, 17)),
    new Changelog(changelogType.NEW, 'More Farm statistics'),
    new Changelog(changelogType.CHANGE, 'UI/text changes'),
    new Changelog(changelogType.CHANGE, 'Farm flavor mutations are more strict and less invasive'),
    new Changelog(changelogType.CHANGE, 'Hide locked berries in trade window'),
    new Changelog(changelogType.FIXED, 'Quest not completing if restarted after being quit'),
    new Changelog(changelogType.FIXED, 'Farm mulches can now be applied multiple times per plot'),
    new Changelog(changelogType.FIXED, 'Oak items upgraded currency shows correct currency'),
    new Changelog(changelogType.FIXED, 'Fixed some lag'),

    // v0.6.3
    new ChangelogUpdate('v0.6.3', new Date(2020, 10, 13)),
    new Changelog(changelogType.CHANGE, 'Show Berry hints in BerryDex'),
    new Changelog(changelogType.FIXED, 'Farm mulch should work correctly now'),
    new Changelog(changelogType.FIXED, 'Update Pokémon native regions'),
    new Changelog(changelogType.FIXED, 'Proteins used not based on Battle Item multiplier'),

    // v0.6.1
    new ChangelogUpdate('v0.6.1', new Date(2020, 10, 13)),
    new Changelog(changelogType.NEW, 'More Farm statistics'),
    new Changelog(changelogType.NEW, 'Added Protein trade to Sinnoh Berry Master'),
    new Changelog(changelogType.NEW, 'Added multiple button to Mulch in Farm'),
    new Changelog(changelogType.FIXED, 'Fix Pokémon not appearing in Battle Frontier'),
    new Changelog(changelogType.FIXED, 'Evolution Stones not working'),

    // v0.6.0
    new ChangelogUpdate('v0.6.0', new Date(2020, 10, 13)),
    new Changelog(changelogType.NEW, 'Complete Farm overhaul'),
    new Changelog(changelogType.NEW, 'Hotkeys added for oak items modal (O to open, number keys to toggle items)'),
    new Changelog(changelogType.NEW, 'Hotkeys added for Pokéball selector modal (P + number to open, number keys to toggle items)'),
    new Changelog(changelogType.NEW, 'More NPCs added around the regions'),
    new Changelog(changelogType.NEW, 'Other Deoxys forms obtainable in the Battle Frontier'),
    new Changelog(changelogType.NEW, 'Protein item now has a use, buy from Pokémon League, use in Hatchery'),
    new Changelog(changelogType.NEW, 'Free quest refreshes'),
    new Changelog(changelogType.NEW, 'Hatchery filters are now saved upon reload'),
    new Changelog(changelogType.CHANGE, 'Damage output modified, dual types nerfed, single types buffed'),
    new Changelog(changelogType.CHANGE, 'Unlock Kanto route 22 earlier in the game'),
    new Changelog(changelogType.CHANGE, 'Show currently locked Dungeon Bosses'),
    new Changelog(changelogType.CHANGE, 'Modified Sinnoh route difficulty'),
    new Changelog(changelogType.CHANGE, 'Display time played as a readable value'),
    new Changelog(changelogType.CHANGE, 'Quests list not auto refreshed on new day or level up'),
    new Changelog(changelogType.CHANGE, 'Update Masterball image'),
    new Changelog(changelogType.FIXED, 'All eggs will auto hatch when steps reached if Pokémon still in the queue'),
    new Changelog(changelogType.FIXED, 'Backup save data corrected'),
    new Changelog(changelogType.FIXED, 'Pokémon List resorted when new Pokémon obtained'),
    new Changelog(changelogType.FIXED, 'Attack display error'),
    new Changelog(changelogType.FIXED, 'Acheivements re-filter once acheivement completed'),
    new Changelog(changelogType.FIXED, 'Swapped Kanto routes 7 and 8'),
    new Changelog(changelogType.FIXED, 'Reduce svg image sizes, fix some lag'),
    new Changelog(changelogType.FIXED, 'Reduce screen movement on mobile battle view'),

    // v0.5.8
    new ChangelogUpdate('v0.5.8', new Date(2020, 10, 1)),
    new Changelog(changelogType.NEW, 'Queue functionality added to Hatchery'),
    new Changelog(changelogType.NEW, 'Can add Pokémon to custom Categories, and sort/filter by those'),
    new Changelog(changelogType.NEW, 'Safari Zone Pokémon can now appear as overworld sprites'),
    new Changelog(changelogType.NEW, 'Completed Quest and Achievements will show in the Log Book'),
    new Changelog(changelogType.NEW, 'See Pokémon Attack after calculations by hovering Pokémon Attack value'),
    new Changelog(changelogType.NEW, 'Add sparkle to shiny overworld sprites for Dynamic Background and Safari Zone'),
    new Changelog(changelogType.NEW, 'Can sort Pokémon by Times Hatched'),
    new Changelog(changelogType.CHANGE, 'Boost Dungeon Tokens gained slightly'),
    new Changelog(changelogType.CHANGE, 'Updated images, Use svg images for Currency and Pokéballs'),
    new Changelog(changelogType.CHANGE, 'Evolution Stones will show a caught indicator in shops'),
    new Changelog(changelogType.CHANGE, 'Display date in changelog when updates occured'),
    new Changelog(changelogType.CHANGE, 'Update Gyms Pokémon and defeated text'),
    new Changelog(changelogType.CHANGE, 'Update Kanto Pokémon encounters to be based on Pokémon Yellow version'),
    new Changelog(changelogType.CHANGE, 'Updated layout of Pokémon List'),
    new Changelog(changelogType.CHANGE, 'Show event Pokémon in the Pokédex'),
    new Changelog(changelogType.CHANGE, 'Can no longer upgrade shard effectiveness where there is no usage'),
    new Changelog(changelogType.CHANGE, 'Roaming Pokémon chance of appearing is now based on route difficulty'),
    new Changelog(changelogType.CHANGE, 'Doubled the chance of encountering uncaught Pokémon in the Safari Zone'),
    new Changelog(changelogType.CHANGE, 'Display Pokéball amount in selector modal'),
    new Changelog(changelogType.FIXED, 'Can no longer start a new Pokémon League battle if modal open'),
    new Changelog(changelogType.FIXED, 'Shop cost will no longer go above 100× the base cost'),
    new Changelog(changelogType.FIXED, 'Underground hammer will display red box when on edge tiles'),
    new Changelog(changelogType.FIXED, 'Mine should no longer soft lock players'),
    new Changelog(changelogType.FIXED, 'Alternate Form Pokémon statistics shown correctly'),
    new Changelog(changelogType.FIXED, 'When hatching shop eggs, the Pokémons level will no longer be reset'),
    new Changelog(changelogType.FIXED, 'Underground daily trades statistic will increment correctly when doing multiple trades'),
    new Changelog(changelogType.FIXED, 'Minor display and text fixes'),

    // v0.5.7
    new ChangelogUpdate('v0.5.7', new Date(2020, 9, 13)),
    new Changelog(changelogType.NEW, 'Added setting for Hatchery egg ready to hatch animations'),
    new Changelog(changelogType.NEW, 'More NPCs in towns around Johto and Hoenn'),
    new Changelog(changelogType.NEW, 'Types displayed in Pokémon statistics modal'),
    new Changelog(changelogType.NEW, 'Underground Bomb is now upgradable'),
    new Changelog(changelogType.NEW, 'Buttons added to achievement modal to jump to first and last pages'),
    new Changelog(changelogType.NEW, 'Number keys (1-9) can now be used to start Pokémon League battles'),
    new Changelog(changelogType.CHANGE, 'Pokéball selector made smaller, now makes use of a modal'),
    new Changelog(changelogType.CHANGE, 'Add some spacing to Damage Calculator'),
    new Changelog(changelogType.CHANGE, 'Hatchery eggs will display in a row of 4 when module is in the middle columnn'),
    new Changelog(changelogType.CHANGE, 'Always show total levels in Oak Item tooltips'),
    new Changelog(changelogType.CHANGE, 'Updated images for shop Pokémon'),
    new Changelog(changelogType.CHANGE, 'Farm images made sharper'),
    new Changelog(changelogType.FIXED, 'Dungeons with a large amount of Pokémon will no longer hide the start button'),
    new Changelog(changelogType.FIXED, 'Updated Hatchery sort display'),
    new Changelog(changelogType.FIXED, 'Notification sounds normalized'),
    new Changelog(changelogType.FIXED, 'Sprout images displayed in Farm'),
    new Changelog(changelogType.FIXED, 'Achievement modal pages should now show the correct numbers'),
    new Changelog(changelogType.FIXED, 'Mine data contained in save data'),
    new Changelog(changelogType.FIXED, 'Saves should no longer have issues downloading'),

    // v0.5.6
    new ChangelogUpdate('v0.5.6', new Date(2020, 9, 6)),
    new Changelog(changelogType.NEW, 'Added Damage Calculator to Start Menu'),
    new Changelog(changelogType.NEW, 'Background settings Night and Dynamic added'),
    new Changelog(changelogType.NEW, 'Walking in the Safari Zone will now add steps to your eggs'),
    new Changelog(changelogType.NEW, 'Achievements added for reaching maximum level on oak items'),
    new Changelog(changelogType.NEW, 'Added Achievement Tracker module'),
    new Changelog(changelogType.NEW, 'Added region filter to Pokédex'),
    new Changelog(changelogType.NEW, 'Added sort dropdown to the Hatchery'),
    new Changelog(changelogType.NEW, 'Added setting for shop value increment amount'),
    new Changelog(changelogType.NEW, 'Introduction to some gameplay elements added for new players'),
    new Changelog(changelogType.NEW, 'Eggs will wobble when they are ready to hatch'),
    new Changelog(changelogType.NEW, 'Start Menu contains a link to the Wiki'),
    new Changelog(changelogType.CHANGE, 'Can hide the Pokémon filter in the Hatchery'),
    new Changelog(changelogType.CHANGE, 'Energy use disabled once you complete a layer in Underground until refreshed'),
    new Changelog(changelogType.CHANGE, 'Added player icon in Dungeons'),
    new Changelog(changelogType.CHANGE, 'Can see your list of eggs and fossils even if you cannot breed them'),
    new Changelog(changelogType.CHANGE, 'Unobtained Pokémon will show as white on dark themes'),
    new Changelog(changelogType.FIXED, 'Underground will no longer contain multiple deals with the same items'),
    new Changelog(changelogType.FIXED, 'Shop prices should no longer overflow when too large'),
    new Changelog(changelogType.FIXED, 'Discord usernames should no longer affect saves'),

    // v0.5.5
    new ChangelogUpdate('v0.5.5', new Date(2020, 9, 3)),
    new Changelog(changelogType.NEW, 'Achievements can now be filtered'),
    new Changelog(changelogType.NEW, 'Can sort Underground items by clicking on table titles'),
    new Changelog(changelogType.NEW, 'NPCs now in towns, will provide dialog that will help the player complete their Pokédex'),
    new Changelog(changelogType.NEW, 'More notification settings have been added'),
    new Changelog(changelogType.CHANGE, 'Increase shiny chance when using an evolution item'),
    new Changelog(changelogType.CHANGE, 'Increase shiny chance for dungeon Pokémon'),
    new Changelog(changelogType.CHANGE, 'More shops added to towns'),
    new Changelog(changelogType.CHANGE, 'More Pokémon added to typed eggs'),
    new Changelog(changelogType.CHANGE, 'Electrike is now exclusive to eggs'),
    new Changelog(changelogType.CHANGE, '"Complete the Kanto Pokédex!" achievement now requires all 151 Kanto Pokémon'),
    new Changelog(changelogType.CHANGE, 'Regirock, Regice and Registeel no longer Roaming, now in Sealed Chamber dungeon'),
    new Changelog(changelogType.CHANGE, 'Kyogre and Groudon will only appear in their dungeon after defeating the Hoenn Elite 4'),
    new Changelog(changelogType.CHANGE, 'If you encounter a new Pokémon that is also shiny, the higher tier ball will be selected'),
    new Changelog(changelogType.CHANGE, 'Battle item effect timers now display upto 99 hours'),
    new Changelog(changelogType.CHANGE, 'Phione now obtained by breeding Manaphy'),
    new Changelog(changelogType.FIXED, 'Quest list should only auto refresh if all quest are claimed or it is a new day'),
    new Changelog(changelogType.FIXED, 'Gym Pokémon can no longer be captured by players'),
    new Changelog(changelogType.FIXED, 'Reduce some lag caused by hatchery filters'),
    new Changelog(changelogType.FIXED, 'Mystery egg can now hatch Pokémon from the Dragon Egg pool'),
    new Changelog(changelogType.FIXED, 'Travelling to the next Region now requires all of that regions Pokémon (excluding different forms)'),

    // v0.5.4
    new ChangelogUpdate('v0.5.4', new Date(2020, 8, 28)),
    new Changelog(changelogType.NEW, 'More stores and items added in Johto, Hoenn and Sinnoh'),
    new Changelog(changelogType.NEW, 'Added notifications for the Farm'),
    new Changelog(changelogType.NEW, 'Can now sort Pokémon list by Breeding Efficiency'),
    new Changelog(changelogType.NEW, 'Can now sort Pokémon list by Egg Steps'),
    new Changelog(changelogType.NEW, 'New Rotom forms available'),
    new Changelog(changelogType.NEW, 'Added ability to use multiple battle items in 1 click'),
    new Changelog(changelogType.NEW, 'Shards types can now be collapsed'),
    new Changelog(changelogType.CHANGE, 'Game should now load in older versions of Firefox'),
    new Changelog(changelogType.CHANGE, 'Mesprit and Cresselia are now roaming in Sinnoh'),
    new Changelog(changelogType.FIXED, 'Updated Burmy (plant) shop image'),
    new Changelog(changelogType.FIXED, 'Safari Zone modal should no longer be able to close without clicking the intended buttons'),
    new Changelog(changelogType.FIXED, 'Updated Shoal Cave entry cost'),
    new Changelog(changelogType.FIXED, 'Hatchery should no longer cause lag when hatching'),
    new Changelog(changelogType.FIXED, 'Old Quests will no longer give a notification when completed once they are refreshed'),

    // v0.5.3
    new ChangelogUpdate('v0.5.3', new Date(2020, 8, 21)),
    new Changelog(changelogType.NEW, 'Can filter Daycare Pokémon by name (regex supported)'),
    new Changelog(changelogType.NEW, 'Select which information is displayed under each Pokémon in the Daycare'),
    new Changelog(changelogType.NEW, 'Possible to start with a Pikachu if no starter Pokémon selected enough times'),
    new Changelog(changelogType.CHANGE, 'Some Roaming Pokémon will only appear after certain requirements have been met'),
    new Changelog(changelogType.CHANGE, 'Some Dungeon Pokémon will only appear after certain requirements have been met'),
    new Changelog(changelogType.FIXED, 'Flower Paradise dungeon HP corrected'),
    new Changelog(changelogType.FIXED, 'Route 40 should no longer unlock before reaching it'),
    new Changelog(changelogType.FIXED, 'Reduce some checks firing too often'),
    new Changelog(changelogType.FIXED, 'Game controls will be ignored if focused on an input element'),
    new Changelog(changelogType.FIXED, 'Backgrounds should no longer overflow in breeding modal'),

    // v0.5.2
    new ChangelogUpdate('v0.5.2', new Date(2020, 8, 10)),
    new Changelog(changelogType.NEW, 'Underground quest line created'),
    new Changelog(changelogType.NEW, 'More statistics added'),
    new Changelog(changelogType.NEW, 'Some minor Discord integration'),
    new Changelog(changelogType.CHANGE, 'Attack achievement no longer based on current region'),
    new Changelog(changelogType.CHANGE, 'Modified the way game ticks are handled'),
    new Changelog(changelogType.FIXED, 'Fixed breeding filter displayed options being reset after hatchery filled up'),

    // v0.5.1
    new ChangelogUpdate('v0.5.1', new Date(2020, 7, 31)),
    new Changelog(changelogType.NEW, 'Added a notification for when the game has an update available'),
    new Changelog(changelogType.NEW, 'Add Croagunk to Route 212'),
    new Changelog(changelogType.CHANGE, 'Move Hippopotas from Route 210 → Route 214'),
    new Changelog(changelogType.CHANGE, 'Updated Fight Area requirements'),
    new Changelog(changelogType.CHANGE, 'Buffed Erika Victreebel'),
    new Changelog(changelogType.FIXED, 'Unobtainable items will no longer remain in the Underground'),
    new Changelog(changelogType.FIXED, 'Pacifidlog town shop now available'),
    new Changelog(changelogType.FIXED, 'Hide alternate forms from Pokédex that have not yet been caught'),
    new Changelog(changelogType.FIXED, 'Shaymin (sky) form types corrected'),

    // v0.5.0 - Sinnoh
    new ChangelogUpdate('v0.5.0 - Sinnoh', new Date(2020, 7, 28)),
    new Changelog(changelogType.NEW, 'The Sinnoh region is now available'),
    new Changelog(changelogType.NEW, 'New evolution stones'),
    new Changelog(changelogType.NEW, 'Dungeon based evolutions'),
    new Changelog(changelogType.NEW, 'Time based evolutions'),
    new Changelog(changelogType.NEW, '2 new fossils added to the Underground'),
    new Changelog(changelogType.NEW, 'Pokémon alternate forms can now be obtained'),
    new Changelog(changelogType.CHANGE, 'Decrease attack reduction in newer regions'),
    new Changelog(changelogType.CHANGE, 'All Happiness/Friendship evolutions now make use of the Soothe Bell'),
    new Changelog(changelogType.CHANGE, 'Added base exp per quest completed'),
    new Changelog(changelogType.CHANGE, 'Updated the order Routes, Dungeons and Gyms need to be completed in the Kanto region'),
    new Changelog(changelogType.FIXED, 'Gyms should award correct amount of Egg steps now'),
    new Changelog(changelogType.REMOVED, 'Removed Time Stone'),
    new Changelog(changelogType.REMOVED, 'Removed hold evolution items from the Underground'),

    // v0.4.20
    new ChangelogUpdate('v0.4.20 - Battle Frontier', new Date(2020, 7, 18)),
    new Changelog(changelogType.NEW, 'Added the Battle Frontier in the Hoenn region'),
    new Changelog(changelogType.CHANGE, 'Buffed Dungeon Token gain in higher regions'),
    new Changelog(changelogType.CHANGE, 'Updated the order Routes, Dungeons and Gyms need to be completed in the Johto region'),
    new Changelog(changelogType.CHANGE, 'Updated the order Routes, Dungeons and Gyms need to be completed in the Kanto region'),
    new Changelog(changelogType.FIXED, 'Questline progress restored correctly'),

    // v0.4.19
    new ChangelogUpdate('v0.4.19', new Date(2020, 7, 15)),
    new Changelog(changelogType.NEW, 'Filters added to the Day Care'),
    new Changelog(changelogType.NEW, 'Achievements available for all regions'),
    new Changelog(changelogType.CHANGE, 'Buffed bonus for the Cell Battery'),
    new Changelog(changelogType.CHANGE, 'Sounds will now play if enabled even if the notification is disabled'),

    // v0.4.18
    new ChangelogUpdate('v0.4.18 - Underground', new Date(2020, 7, 10)),
    new Changelog(changelogType.NEW, 'Added Prospect ability to the Underground to see which types of items are in the current layer'),
    new Changelog(changelogType.NEW, 'Added Bomb ability to the Underground which will mine random tiles for you'),
    new Changelog(changelogType.NEW, 'Added ability to Skip layers in the Underground'),
    new Changelog(changelogType.NEW, 'Added ability to sell/trade multiple items at once in the Underground'),
    new Changelog(changelogType.NEW, 'Added volume control for notification sounds'),
    new Changelog(changelogType.NEW, 'Some Pokémon now have a chance to drop rare items upon defeat'),
    new Changelog(changelogType.NEW, 'Added Pokédex filter for Pokémon that drop rare items'),
    new Changelog(changelogType.NEW, 'Added Deoxys quest line'),
    new Changelog(changelogType.CHANGE, 'Deoxys no longer roaming'),
    new Changelog(changelogType.CHANGE, 'Separate Day Care modal into individual tabs for Pokémon, Eggs and Fossils'),
    new Changelog(changelogType.CHANGE, 'Update modal displays'),
    new Changelog(changelogType.FIXED, 'Event Pokémon no longer displayed in Pokédex'),
    new Changelog(changelogType.FIXED, 'Reduce memory usage in Underground'),

    // v0.4.17
    new ChangelogUpdate('v0.4.17', new Date(2020, 7, 6)),
    new Changelog(changelogType.NEW, 'Update maps'),
    new Changelog(changelogType.NEW, 'Add notification settings'),
    new Changelog(changelogType.NEW, 'Add more notification sounds and settings'),
    new Changelog(changelogType.NEW, 'Can now filter the Pokédex by pure type Pokémon by selecting None for the second type'),
    new Changelog(changelogType.NEW, 'Added statistic for Hatched Shiny Pokémon'),
    new Changelog(changelogType.NEW, 'Caught indicator on eggs showing if you have obtained all the Pokémon available in that egg type'),
    new Changelog(changelogType.CHANGE, 'Move some dungeons to be standalone'),
    new Changelog(changelogType.FIXED, 'Safari Zone should no longer lock up'),
    new Changelog(changelogType.FIXED, 'Event Pokémon can now evolve'),
    new Changelog(changelogType.FIXED, 'Helix fossil now displays correctly when mining in the Underground'),

    // v0.4.16
    new ChangelogUpdate('v0.4.16', new Date(2020, 6, 30)),
    new Changelog(changelogType.NEW, 'Added sounds for specific events'),
    new Changelog(changelogType.NEW, 'Added more settings'),
    new Changelog(changelogType.NEW, 'New maps'),
    new Changelog(changelogType.CHANGE, 'Updated settings menu'),
    new Changelog(changelogType.CHANGE, 'Shops will now only show the balance of currencies used there'),
    new Changelog(changelogType.CHANGE, 'Gyms and Dungeons in the Johto and Hoenn regions have been buffed'),

    // v0.4.15
    new ChangelogUpdate('v0.4.15', new Date(2020, 6, 27)),
    new Changelog(changelogType.NEW, 'Eggs now have multiple different styles'),
    new Changelog(changelogType.CHANGE, 'xExp is now the Lucky Egg'),
    new Changelog(changelogType.CHANGE, 'Updated Currency, Item, Berry, Egg and Fossil images'),
    new Changelog(changelogType.CHANGE, 'Day Care is now unlocked once you defeat Route 5'),
    new Changelog(changelogType.CHANGE, 'Fossils will now show in the Hatchery'),
    new Changelog(changelogType.CHANGE, 'Update Farm layout for smaller displays'),
    new Changelog(changelogType.CHANGE, 'Update Safari Zone cost'),
    new Changelog(changelogType.CHANGE, 'Underground now shows the 3 x 3 area which will be mined when using the hammer'),
    new Changelog(changelogType.FIXED, 'Underground total items should now be correct'),

    // v0.4.14
    new ChangelogUpdate('v0.4.14', new Date(2020, 6, 22)),
    new Changelog(changelogType.NEW, 'Added Dratini to Route 45'),
    new Changelog(changelogType.NEW, 'Underground should now work better on smaller screens'),
    new Changelog(changelogType.CHANGE, 'Enlarge buttons in Shortcut menu, Safari Zone'),
    new Changelog(changelogType.CHANGE, 'Make Shop items fit better'),
    new Changelog(changelogType.CHANGE, 'Breeding display takes up less space on smaller screens now'),
    new Changelog(changelogType.CHANGE, 'Add confirmation when refreshing quest list'),
    new Changelog(changelogType.FIXED, 'Update Oak items tooltip when upgraded'),
    new Changelog(changelogType.FIXED, 'Auto refresh Daily Deals when upgrade purchased'),

    // v0.4.13
    new ChangelogUpdate('v0.4.13', new Date(2020, 6, 20)),
    new Changelog(changelogType.NEW, 'Added shortcut module'),
    new Changelog(changelogType.NEW, 'Added Poké Mart to shortcuts module'),
    new Changelog(changelogType.CHANGE, 'Updated Masterball pricing'),
    new Changelog(changelogType.CHANGE, 'Allow the game to continue running while Day Care is open'),
    new Changelog(changelogType.CHANGE, 'Allow the game to continue running while Underground is open'),
    new Changelog(changelogType.CHANGE, 'Don\'t send the player back to Route 11 when leaving the Underground'),
    new Changelog(changelogType.CHANGE, 'Allow the game to continue running while Farm is open'),
    new Changelog(changelogType.CHANGE, 'Don\'t send the player back to Route 14 when leaving the Farm'),
    new Changelog(changelogType.CHANGE, 'Added button to open Dock for cities located nearby'),
    new Changelog(changelogType.CHANGE, 'Moved shiny icon further into the corner in the Day Care view, to make it easier to spot already shiny Pokémon'),
    new Changelog(changelogType.CHANGE, 'Dungeon size scales depending on region'),

    // v0.4.12
    new ChangelogUpdate('v0.4.12', new Date(2020, 6, 18)),
    new Changelog(changelogType.NEW, 'Modules can now be sorted/arranged any way you like, just drag and drop'),
    new Changelog(changelogType.NEW, 'Added confirmation when quiting a quest'),
    new Changelog(changelogType.CHANGE, 'Updated dungeon token cost in Hoenn dungeons'),
    new Changelog(changelogType.CHANGE, 'Updated the gym fight view'),
    new Changelog(changelogType.CHANGE, 'Updated some messages shown when you cannot access a location yet'),
    new Changelog(changelogType.FIXED, 'Some battle background images were not showing, they should now appear correctly'),
    new Changelog(changelogType.FIXED, 'Town Map will now be fully hidden when it is supposed to be'),

    // v0.4.11
    new ChangelogUpdate('v0.4.11', new Date(2020, 6, 16)),
    new Changelog(changelogType.NEW, 'Towns will show as orange if you have not yet completed the gym'),
    new Changelog(changelogType.NEW, 'Map is able to be hidden now'),
    new Changelog(changelogType.NEW, 'Added mobile support to the Safari Zone'),
    new Changelog(changelogType.CHANGE, 'The Cell Battery Oak Item will now gain points each time you find an item'),
    new Changelog(changelogType.CHANGE, 'Updated the layout of the Shard modal'),
    new Changelog(changelogType.CHANGE, 'Updated the layout of the Safari Zone'),
    new Changelog(changelogType.FIXED, 'Stone evolutions will now only show the Pokéball if all possible evolutions have been caught'),

    // v0.4.10
    new ChangelogUpdate('v0.4.10 - Minor update', new Date(2020, 6, 15)),
    new Changelog(changelogType.NEW, 'Added preload progress indicator'),
    new Changelog(changelogType.NEW, 'Game will still load if not all the images preload correctly'),

    // v0.4.9
    new ChangelogUpdate('v0.4.9', new Date(2020, 6, 14)),
    new Changelog(changelogType.NEW, 'Added option to disable found berries notifications'),
    new Changelog(changelogType.NEW, 'Added different background images when battling Pokémon depending on route/dungeon'),
    new Changelog(changelogType.CHANGE, 'Updated Bootstrap, TypeScript and other dependencies, please report any problems you may notice'),
    new Changelog(changelogType.CHANGE, 'Limit maximum Quest Points for Dungeon and Gym quests'),
    new Changelog(changelogType.CHANGE, 'Updated quest list layout'),
    new Changelog(changelogType.CHANGE, 'Format numbers in shop and Pokéball selector'),
    new Changelog(changelogType.FIXED, 'Dungeons should now award Dungeon Tokens when catching a Pokémon'),
    new Changelog(changelogType.FIXED, 'Badge names should display correctly now'),

    // v0.4.8
    new ChangelogUpdate('v0.4.8', new Date(2020, 6, 12)),
    new Changelog(changelogType.NEW, 'More events'),
    new Changelog(changelogType.NEW, 'Added caught status indicator to Safari Zone entrance'),
    new Changelog(changelogType.NEW, 'Added caught status indicator to Dungeons'),
    new Changelog(changelogType.CHANGE, 'Show Oak Item details on hover on main screen'),
    new Changelog(changelogType.CHANGE, 'Updated Oak Items modal to show current experience on hover'),
    new Changelog(changelogType.CHANGE, 'Animate town and dungeon background images'),
    new Changelog(changelogType.CHANGE, 'Updated battle views of routes and dungeons'),
    new Changelog(changelogType.FIXED, 'Event notifications showing way before event start'),
    new Changelog(changelogType.FIXED, 'Reduce lag when hatching Pokémon'),

    // v0.4.7
    new ChangelogUpdate('v0.4.7 - Layout', new Date(2020, 6, 9)),
    new Changelog(changelogType.NEW, 'Added option to sort Pokémon list by base attack'),
    new Changelog(changelogType.CHANGE, 'Added information and confirmation check before traveling to next available region'),
    new Changelog(changelogType.CHANGE, 'Updated the Oak Items layout'),
    new Changelog(changelogType.CHANGE, 'Updated layout of Towns and Dungeons'),
    new Changelog(changelogType.CHANGE, 'Updated the Hoenn map'),
    new Changelog(changelogType.CHANGE, 'Show the amount of Pokémon visible in Pokédex with filters active'),
    new Changelog(changelogType.FIXED, 'Event Pokémon no longer count towards achievements or being able to travel to next region'),
    new Changelog(changelogType.FIXED, 'Mt. Chimney dungeon is now more powerful'),

    // v0.4.6
    new ChangelogUpdate('v0.4.6 - Bug fixes', new Date(2020, 6, 7)),
    new Changelog(changelogType.NEW, 'Old save can be backed up when the game updates incase anything goes wrong<br/><i>You can disable auto download in the settings</i>'),
    new Changelog(changelogType.NEW, 'Add events modal'),
    new Changelog(changelogType.CHANGE, 'Safari now uses a Safari Ball'),
    new Changelog(changelogType.CHANGE, 'Added ability to track event Pokémon statistics'),
    new Changelog(changelogType.CHANGE, 'Update Discord link'),
    new Changelog(changelogType.FIXED, 'Pokéball should appear in dungeons again'),
    new Changelog(changelogType.FIXED, 'Fix Eeveelutions'),

    // v0.4.5
    new ChangelogUpdate('v0.4.5 - Special events', new Date(2020, 6, 5)),
    new Changelog(changelogType.EVENT, 'Flying Pikachu Event'),
    new Changelog(changelogType.NEW, 'Special events can now appear in game'),
    new Changelog(changelogType.CHANGE, 'Modified the look of the dock'),
    new Changelog(changelogType.CHANGE, 'Always add caught Shiny Pokémon to the Log Book'),
    new Changelog(changelogType.CHANGE, 'Added close button on the top right of more modals'),
    new Changelog(changelogType.FIXED, 'Dungeon layout should be shuffled again'),
    new Changelog(changelogType.FIXED, 'Hopefully fixed some values becoming NaN'),

    // v0.4.4
    new ChangelogUpdate('v0.4.4 - Statistics 2.0', new Date(2020, 6, 4)),
    new Changelog(changelogType.NEW, 'Add some new game codes'),
    new Changelog(changelogType.NEW, 'Statistics can now be viewed from the Start Menu'),
    new Changelog(changelogType.NEW, 'Pokémon statistics can be viewed by clicking a Pokémon in the Pokédex'),
    new Changelog(changelogType.CHANGE, 'Update some game codes'),
    new Changelog(changelogType.REMOVED, 'Remove old game codes'),
    new Changelog(changelogType.FIXED, 'Can no longer breed fossils from regions you have not reached yet'),
    new Changelog(changelogType.FIXED, 'Added missing notifications for stone evolution Pokémon'),

    // v0.4.3
    new ChangelogUpdate('v0.4.3', new Date(2020, 6, 3)),
    new Changelog(changelogType.NEW, 'Add setting to disable currency animations'),
    new Changelog(changelogType.CHANGE, 'Increase some notifications display time'),
    new Changelog(changelogType.CHANGE, 'Decreased price multiplier'),
    new Changelog(changelogType.CHANGE, 'Modified Pokémon list reverse checkbox to show arrows instead'),
    new Changelog(changelogType.CHANGE, 'Updated changelog layout'),
    new Changelog(changelogType.FIXED, 'Fix LilyCove City naming and image'),
    new Changelog(changelogType.FIXED, 'Tidy up Key items, Evolution stones selector'),
    new Changelog(changelogType.FIXED, 'Sketchy theme checkboxes and close icons should display correctly now'),

    // v0.4.2
    new ChangelogUpdate('v0.4.2', new Date(2020, 6, 3)),
    new Changelog(changelogType.FIXED, 'Fixed some Key items not being given when supposed to'),

    // v0.4.1
    new ChangelogUpdate('v0.4.1 - More fixes', new Date(2020, 6, 3)),
    new Changelog(changelogType.NEW, 'More items added to underground'),
    new Changelog(changelogType.CHANGE, 'All Hoenn Pokémon should be obtainable now'),
    new Changelog(changelogType.FIXED, 'Pokédex filtering should be working again'),
    new Changelog(changelogType.FIXED, 'Some items showing _ in their name in notifications'),

    // v0.4.0
    new ChangelogUpdate('v0.4.0 - Statistics update', new Date(2020, 6, 2)),
    new Changelog(changelogType.NEW, 'Current save data should be compatible with future versions!'),
    new Changelog(changelogType.NEW, 'More statistics have been added'),
    new Changelog(changelogType.CHANGE, 'Updated the way statistics are stored'),
    new Changelog(changelogType.CHANGE, 'Updated notifications'),
    new Changelog(changelogType.FIXED, 'Fix some missing Hoenn Pokémon'),
    new Changelog(changelogType.FIXED, 'Fix some missing images'),

    // v0.3.1
    new ChangelogUpdate('v0.3.1 - Bug catcher', new Date(2020, 6, 1)),
    new Changelog(changelogType.CHANGE, 'Eevee will now evolve into Espeon or Umbreon depending on the time of day (when using Time stone)'),
    new Changelog(changelogType.FIXED, 'Can no longer evolve Magmar and Electabuzz before you are allowed'),
    new Changelog(changelogType.FIXED, 'Fix breeding steps gained for newer regions'),
    new Changelog(changelogType.FIXED, 'Fix roaming encounters for newer regions'),
    new Changelog(changelogType.FIXED, 'Fix route rewards for newer regions'),

    // v0.3.0
    new ChangelogUpdate('v0.3.0 - Hoenn Update', new Date(2020, 5, 30)),
    new Changelog(changelogType.NEW, 'Add initial Hoenn region'),
    new Changelog(changelogType.CHANGE, 'Shiny Pokémon now increase click damage at a 50% rate compared to normal Pokémon'),
    new Changelog(changelogType.CHANGE, 'Allow better control of which type of ball to use when capturing a Pokémon'),

    // v0.2.1
    new ChangelogUpdate('v0.2.1', new Date(2020, 0, 13)),
    new Changelog(changelogType.REMOVED, 'Remove Hoenn dungeons for now to avoid triggering errors'),
    new Changelog(changelogType.FIXED, 'Other berries will now be tasked in Quests'),

    // v0.2.0
    new ChangelogUpdate('v0.2.0 - Redeemable codes', new Date(2020, 0, 12)),
    new Changelog(changelogType.NEW, 'Add redeemable codes to get a quick boost. You can enter them under the Save tab'),
    new Changelog(changelogType.FIXED, 'Gyms no longer reset 1 second in'),

    // v0.1.0
    new ChangelogUpdate('v0.1.0 - Farming refactor', new Date(2020, 0, 12)),
    new Changelog(changelogType.CHANGE, 'Farming plots are a bit more expensive'),
    new Changelog(changelogType.CHANGE, 'Wailmer pail unlocks at 3 Cheri berries instead of 5'),
    new Changelog(changelogType.FIXED, 'Tooltips no longer overstay their welcome on the Farm'),

    // v0.0.5
    new ChangelogUpdate('v0.0.5', new Date(2020, 0, 9)),
    new Changelog(changelogType.NEW, 'Can now use spacebar to start Gym/Dungeon'),
    new Changelog(changelogType.FIXED, 'Stones now work with multiple evolutions'),
    new Changelog(changelogType.FIXED, 'Pokémon will no longer evolve into evolutions you have already obtained'),
    new Changelog(changelogType.FIXED, 'Can obtain Pokémon from future generations by re-breeding'),
    new Changelog(changelogType.FIXED, 'Devolutions are obtained when breeding evolved forms'),
    new Changelog(changelogType.NEW, 'Add setting to toggle egg percentage/step count'),
    new Changelog(changelogType.CHANGE, 'Total shiny Pokémon caught no longer adds to your click attack'),
    new Changelog(changelogType.CHANGE, 'Halve xp needed to upgrade Oak items'),
    new Changelog(changelogType.FIXED, 'BattleItems now buy correctly'),
    new Changelog(changelogType.CHANGE, 'Increase dungeon tokens received when catching Pokémon'),
    new Changelog(changelogType.CHANGE, 'Going to the breeder will no longer send you to route 5'),
    new Changelog(changelogType.CHANGE, 'You will now start the game with 25 Pokéballs'),
    new Changelog(changelogType.CHANGE, 'Tutorial quest buy Pokéballs amount reduced'),
    new Changelog(changelogType.FIXED, 'Selecting "max" in store will no longer freeze the game for key items'),

    // v0.0.4 - 01-01-2020
    new ChangelogUpdate('v0.0.4', new Date(2019, 11, 22)),
    new Changelog(changelogType.NEW, 'Show Pokéball image by caught Pokémon in the Pokédex'),
    new Changelog(changelogType.CHANGE, 'Show the reason you cannot access a location'),
    new Changelog(changelogType.CHANGE, 'Total shiny Pokémon caught now add to your total click attack'),
    new Changelog(changelogType.FIXED, 'Display floored dungeon tokens amount'),

    // v0.0.3
    new ChangelogUpdate('v0.0.3', new Date(2019, 11, 17)),
    new Changelog(changelogType.NEW, 'Can now progress in multiple quest at a time <i>(amount based on Quest Level)</i>'),
    new Changelog(changelogType.NEW, 'Side cards can now be collapsed for more space'),
    new Changelog(changelogType.CHANGE, 'Move battle item container'),
    new Changelog(changelogType.CHANGE, 'Update how achievement percentages are shown'),
    new Changelog(changelogType.CHANGE, 'Update hatch/catch notification message'),
    new Changelog(changelogType.FIXED, 'Show the hatchery "list" button once Johto unlocked without page refresh'),
    new Changelog(changelogType.FIXED, 'Plates from underground should now sell for their correct value'),

    // v0.0.2
    new ChangelogUpdate('v0.0.2', new Date(2019, 11, 16)),
    new Changelog(changelogType.NEW, 'Added changelog'),
    new Changelog(changelogType.CHANGE, 'Show battle item names and descriptions'),
    new Changelog(changelogType.FIXED, 'Item magnet now works in dungeons'),
    new Changelog(changelogType.FIXED, 'Battle items no longer always active'),

    // v0.0.1
    new ChangelogUpdate('v0.0.1', new Date(2019, 11, 16)),
    new Changelog(changelogType.NEW, 'Add battle items'),
];
