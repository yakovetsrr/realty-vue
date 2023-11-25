<template>
  <div :class="$style.container">
    <div :class="$style.filterPage">
      <div :class="$style.filter">
        <VSelect
          :class="$style.select"
          :items="flatOptions"
          label="Тип недвижимости"
        />
        <RoomsFilter />
        <RangeFilter
          :min="0"
          :max="100"
          >Стоимость, млн. ₽</RangeFilter
        >

        <RangeFilter
          :min="0"
          :max="100"
          >Площадь, м2</RangeFilter
        >
      </div>
    </div>

    <button @click="active = !active">Расширенный фильтр</button>
    <BaseCollapse>
      <div
        v-if="active"
        :class="$style.filterPage"
      >
        <div :class="$style.collapse">
          <RangeFilter
            :min="1"
            :max="26"
            >Этаж</RangeFilter
          >
          <VSelect
            :class="$style.select"
            :items="finishingOptions"
            label="Отделка"
          />
          <VSelect
            :class="$style.select"
            :items="viewWindowOptios"
            label="Тип недвижимости"
          />
        </div>
      </div>
    </BaseCollapse>

    <div :class="$style.filterResults">
      <div :class="$style.divSelect">
        <VSelect
          :class="$style.select"
          :items="sortOptions"
          label="Сортировать"
        />
      </div>
      <span> 10 квартир</span>
      <div :class="$style.switch">
        <label>Карточка</label>
        <VSwitch />
        <label>Список</label>
      </div>
    </div>

    <div :class="$style.cardContainer">
      <RealtyObjectCard />
      <RealtyObjectCard />
      <RealtyObjectCard />
      <RealtyObjectCard />
    </div>
  </div>
</template>

<script lang="ts">
import RealtyObjectCard from '@/components/RealtyObjectCard.vue'
import BaseCollapse from '@/components/BaseComponents/BaseCollapse.vue'
import RangeFilter from '@/components/BaseComponents/RangeFilter.vue'
import RoomsFilter from '@/components/BaseComponents/RoomsFilter.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FilterPage',
  components: { RealtyObjectCard, BaseCollapse, RangeFilter, RoomsFilter },
  data() {
    return {
      active: false,
      flatOptions: ['Квартира', 'Апартаменты'],
      doneOptions: ['Вторичка', 'Новостройка'],
      finishingOptions: ['Черновая отделка', 'Чистовая отделка'],
      viewWindowOptios: ['Во двор', 'На улицу'],
      sortOptions: [
        'По росту стоимости',
        'По убыванию стоимости',
        'По росту площади',
        'По убыванию стоимосит',
      ],
      collapseVisible: false,
    }
  },

  async mounted() {
    console.log('mounted')
    const response = await fetch('/api/filter')
    const res = await response.json()

    console.log('res', res)
  },

  methods: {
    handleCollapse() {
      this.collapseVisible = !this.collapseVisible
      console.log('click', this.collapseVisible)
    },
  },
})
</script>

<style module>
.container {
  margin: 0 auto;
  width: 1660px;
}

.filterPage {
  padding-top: 12px;
}

.filter {
  display: inline-flex;
  justify-content: center;
  gap: 18px;
}

.select {
  width: 400px;
  max-width: 400px;
  height: 56px;
}

.filterResults {
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.collapse {
  display: flex;
  gap: 18px;
}

.switch {
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cardContainer {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
</style>
