import { onMounted } from 'vue'

export default function useGameLoop(canvas) {
  const ctx = canvas.getContext('2d')
  const state = {
    player: { x: 0, y: 0 },
    bullets: [],
    enemies: [],
    keys: {},
    score: 0,
    running: false
  }

  function drawPlayer() {
    ctx.fillStyle = 'cyan'
    ctx.beginPath()
    ctx.moveTo(state.player.x, state.player.y)
    ctx.lineTo(state.player.x + 20, state.player.y + 40)
    ctx.lineTo(state.player.x - 20, state.player.y + 40)
    ctx.closePath()
    ctx.fill()
  }

  function drawEnemies() {
    ctx.fillStyle = 'red'
    state.enemies.forEach(e => {
      ctx.beginPath()
      ctx.arc(e.x, e.y, 15, 0, Math.PI * 2)
      ctx.fill()
    })
  }

  function drawBullets() {
    ctx.fillStyle = 'yellow'
    state.bullets.forEach(b => {
      ctx.fillRect(b.x - 2, b.y, 4, 10)
    })
  }

  function update() {
    if (state.keys['ArrowLeft']) state.player.x -= 5
    if (state.keys['ArrowRight']) state.player.x += 5
    state.player.x = Math.max(20, Math.min(canvas.width - 20, state.player.x))

    state.bullets.forEach(b => b.y -= 10)
    state.bullets = state.bullets.filter(b => b.y > -10)

    if (Math.random() < 0.02) {
      state.enemies.push({ x: Math.random() * canvas.width, y: -20 })
    }
    state.enemies.forEach(e => e.y += 2)
    state.enemies = state.enemies.filter(e => e.y < canvas.height + 20)

    state.bullets.forEach((b, bi) => {
      state.enemies.forEach((e, ei) => {
        if (Math.abs(b.x - e.x) < 15 && Math.abs(b.y - e.y) < 15) {
          state.enemies.splice(ei, 1)
          state.bullets.splice(bi, 1)
          state.score++
        }
      })
    })
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawPlayer()
    drawEnemies()
    drawBullets()
    ctx.fillStyle = 'white'
    ctx.fillText(`Score: ${state.score}`, 10, 20)
  }

  let animationId
  function loop() {
    if (!state.running) return
    update()
    render()
    animationId = requestAnimationFrame(loop)
  }

  function keydown(e) {
    if (e.code === 'Space') {
      state.bullets.push({ x: state.player.x, y: state.player.y })
    }
    state.keys[e.code] = true
  }

  function keyup(e) {
    state.keys[e.code] = false
  }

  function start() {
    if (!state.running) {
      state.running = true
      loop()
    }
  }

  function stop() {
    state.running = false
  }

  onMounted(() => {
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
    state.player.x = canvas.width / 2
    state.player.y = canvas.height - 60
    window.addEventListener('keydown', keydown)
    window.addEventListener('keyup', keyup)
  })

  return {
    start,
    stop,
    state
  }
}
