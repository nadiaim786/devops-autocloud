import random
import time

def get_metrics():
    return {
        "cpu": random.randint(10, 90),
        "requests": random.randint(10, 200)
    }

def decide(metrics):
    if metrics["cpu"] > 70:
        return "SCALE_UP 🚀"
    elif metrics["cpu"] < 20:
        return "SCALE_DOWN ⬇️"
    else:
        return "STABLE ✅"

while True:
    metrics = get_metrics()
    decision = decide(metrics)

    print(f"Metrics: {metrics} | Decision: {decision}")
    time.sleep(2)