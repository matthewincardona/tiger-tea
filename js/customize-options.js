export default function customizeOptions(item) {
  return `
        <!-- tapioca pearls -->
        <div class="customizations__box">
          <h4>Tapioca Pearls</h4>
          <input
            type="radio"
            id="tapioca-classic"
            name="tapioca-pearl"
            value="Classic"
          />
          <label for="tapioca-classic">Classic</label><br />
          <input
            type="radio"
            id="tapioca-strawberry"
            name="tapioca-pearl"
            value="Strawberry"
          />
          <label for="tapioca-strawberry">Strawberry</label><br />
          <input
            type="radio"
            id="tapioca-watermelon"
            name="tapioca-pearl"
            value="Watermelon"
          />
          <label for="tapioca-watermelon">Watermelon</label><br />
          <input
            type="radio"
            id="tapioca-coffee"
            name="tapioca-pearl"
            value="Coffee"
          />
          <label for="tapioca-coffee">Coffee</label><br />
          <hr />
        </div>

        <!-- jelly -->
        <div class="customizations__box">
          <h4>Jelly</h4>
          <input type="radio" id="jelly-lychee" name="jelly" value="Lychee" />
          <label for="jelly-lychee">Lychee</label><br />
          <input type="radio" id="jelly-coffee" name="jelly" value="Coffee" />
          <label for="jelly-coffee">Coffee</label><br />
          <input type="radio" id="jelly-milk" name="jelly" value="milk" />
          <label for="jelly-milk">Milk</label><br />
          <hr />
        </div>

        <!-- sweetness -->
        <div class="customizations__box">
          <h4>Sweetness</h4>
          <input
            type="radio"
            id="sweetness-sugar-free"
            name="sweetness"
            value="Sugar Free"
          />
          <label for="sweetness-sugar-free">Sugar Free</label><br />
          <input
            type="radio"
            id="sweetness-less-sweet"
            name="sweetness"
            value="Less Sweet"
          />
          <label for="sweetness-less-sweet">Less Sweet</label><br />
          <input
            type="radio"
            id="sweetness-normal"
            name="sweetness"
            value="Normal"
          />
          <label for="sweetness-normal">Normal</label><br />
          <input
            type="radio"
            id="sweetness-very-sugar"
            name="sweetness"
            value="Very Sugar"
          />
          <label for="sweetness-very-sugar">VERY SUGAR. YES.</label><br />
          <hr />
        </div>

        <!-- ice -->
        <div class="customizations__box">
          <h4>Ice</h4>
          <input type="radio" id="ice-full" name="ice" value="Full" />
          <label for="ice-full">Full</label><br />
          <input type="radio" id="ice-half" name="ice" value="Half" />
          <label for="ice-half">Half</label><br />
          <input type="radio" id="ice-none" name="ice" value="None" />
          <label for="ice-none">None</label><br />
          <hr />
        </div>`;
}
